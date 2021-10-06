import {
  Crypto,
  CryptoTransaction,
  ExchangeRateTypes,
  Position,
  Symbol,
  TransactionType,
} from "../../types";
import { toCurrency } from "../store/exchangeRates";

type PartialPosition = {
  symbol: Symbol;
  transactions: Array<CryptoTransaction>;
};

const groupTransactions = (
  transactions: Array<CryptoTransaction>
): Array<PartialPosition> => {
  const positions: Array<PartialPosition> = [];

  transactions.forEach((transaction) => {
    if (transaction.type !== TransactionType.other) {
      const index = positions.findIndex((p) => p.symbol === transaction.symbol);
      const match = positions[index];
      const data = {
        symbol: transaction.symbol,
        transactions: [transaction],
      };

      if (!match) {
        positions.push(data);
      } else {
        positions[index].transactions.push(transaction);
      }
    }
  });

  return positions.map((p) => ({
    ...p,
    transactions: p.transactions.reverse(),
  }));
};

const transform = (
  transactions: Array<CryptoTransaction>,
  cryptos: Array<Crypto>
): Array<Position> => {
  let positions: Array<Position> = groupTransactions(
    transactions
  ) as Array<Position>;

  // Handle washes.  E.g. +5 +10 -15 = 0. Remove them since the position became 0
  positions.forEach((p) => {
    let runningBalance = 0;
    let washSaleIndex = -1;
    p.transactions.forEach((t, i) => {
      runningBalance += t.amount;

      if (runningBalance >= 0 && runningBalance <= 0.001) {
        washSaleIndex = i;
      }
    });

    if (washSaleIndex !== -1) {
      p.transactions = p.transactions.slice(
        washSaleIndex + 1,
        p.transactions.length
      );
    }
  });
  positions = positions.filter((p) => !!p.transactions.length);

  positions = positions
    .map((position) => {
      const matchedCrypto = cryptos.find((c) => c.id === position.symbol);
      if (!matchedCrypto) {
        position.id = position.symbol;
        position.label = position.transactions[0].label;
        position.coin = position.symbol;
        position.symbol = position.symbol;
        position.rank = 999;
        position.price = 0;
      } else {
        position.id = matchedCrypto.id;
        position.label = matchedCrypto.label;
        position.coin = matchedCrypto.id;
        position.symbol = matchedCrypto.id;
        position.rank = matchedCrypto.rank;
        position.price = matchedCrypto.price;
        position.icon_url = matchedCrypto.icon_url;
        position.sparkline = matchedCrypto.sparkline;
      }

      position.quantity = position.transactions.reduce(
        (acc: number, current: CryptoTransaction) => {
          acc = acc + current.amount;
          return acc;
        },
        0
      );

      position.marketValue = position.price * position.quantity;
      position.costBasis = position.transactions
        .filter(
          (p) =>
            ![
              TransactionType.other,
              TransactionType.hide,
              TransactionType.unknown,
            ].includes(p.type)
        )
        .reduce((acc: number, current: CryptoTransaction) => {
          acc =
            acc +
            toCurrency(
              current.costBasis,
              current.currency as ExchangeRateTypes
            );
          return acc;
        }, 0);

      if (!matchedCrypto) {
        position.costPerShare = position.costBasis / position.quantity;
        position.dayChangePercent = 0;
        position.dayChange = 0;
        position.weekChangePercent = 0;
        position.weekChange = 0;
        position.monthChangePercent = 0;
        position.monthChange = 0;
        position.yearChangePercent = 0;
        position.yearChange = 0;
        position.gainLoss = 0;
        position.gainLossPercent = 0;
      } else {
        position.costPerShare = position.costBasis / position.quantity;
        position.dayChangePercent = matchedCrypto.history_1d.priceChangePercent;
        position.dayChange = position.marketValue * position.dayChangePercent;
        position.weekChangePercent =
          matchedCrypto.history_7d.priceChangePercent;
        position.weekChange = position.marketValue * position.weekChangePercent;
        position.monthChangePercent =
          matchedCrypto.history_30d.priceChangePercent;
        position.monthChange =
          position.marketValue * position.monthChangePercent;
        position.yearChangePercent =
          matchedCrypto.history_365d.priceChangePercent;
        position.yearChange = position.marketValue * position.yearChangePercent;
        position.hourChangePercent =
          matchedCrypto.history_1h.priceChangePercent;
        position.hourChange = position.marketValue * position.hourChangePercent;
        position.gainLoss = position.marketValue - position.costBasis;
        position.gainLossPercent =
          position.marketValue / (position.marketValue - position.gainLoss) - 1;
      }

      return position;
    })
    .filter((p) => p.quantity > 0);

  const walletTotal = positions.reduce((p, i) => p + i.marketValue, 0);
  positions = positions.map((p) => ({
    ...p,
    portfolioPercentage: p.marketValue / walletTotal,
  }));

  const sorted = positions.sort((a, b) =>
    a.marketValue > b.marketValue ? -1 : 1
  );

  return sorted.map((p, i) => ({
    ...p,
    rank: i + 1,
  }));
};

export default transform;
