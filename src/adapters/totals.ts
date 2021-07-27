import {
  CryptoTransaction,
  ExchangeRateTypes,
  Position,
  Totals,
  TransactionKind,
} from "../../types";
import { toCurrency } from "../store/exchangeRates";
import { getCryptoBySymbol } from "../store/ticker";

const transform = (
  positions: Array<Position>,
  transactions: Array<CryptoTransaction> = []
): Totals => {
  const totals = {} as Totals;
  totals.day = positions.reduce((acc, pos) => acc + pos.dayChange, 0);
  totals.portfolioValue = positions.reduce(
    (acc, pos) => acc + pos.marketValue,
    0
  );
  totals.overallCostBasis = positions.reduce(
    (acc, pos) => acc + pos.costBasis,
    0
  );
  totals.dayPercent =
    totals.portfolioValue / (totals.portfolioValue - totals.day) - 1;

  totals.overall = positions.reduce((acc, pos) => acc + pos.gainLoss, 0);
  totals.overallPercent =
    totals.portfolioValue / (totals.portfolioValue - totals.overall) - 1;

  const cashbackTransactions = transactions.filter(
    (p) => p.rawType === TransactionKind.referral_card_cashback
  );
  totals.cashback = cashbackTransactions.reduce(
    (acc, pos) =>
      acc +
      toCurrency(
        getCryptoBySymbol("CRO")?.price * pos.amount || 0,
        pos.currency as ExchangeRateTypes
      ),
    0
  );
  totals.cashbackQuantity = cashbackTransactions.reduce(
    (acc, pos) => acc + pos.amount,
    0
  );

  return totals;
};

export default transform;
