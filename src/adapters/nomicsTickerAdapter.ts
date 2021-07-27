import {
  Crypto,
  ExchangeRateTypes,
  HistoricalData,
  RawCrypto,
} from "../../types";
import { toCurrency } from "../store/exchangeRates";

const tolerantParse = (input) => {
  if (typeof input !== "string") return input;
  try {
    return JSON.parse(input);
  } catch (e) {
    return input;
  }
};

const transform = (
  input: RawCrypto,
  fromCurrency?: ExchangeRateTypes
): Crypto => {
  const buildHistoricalData = (key: string): HistoricalData => {
    const parsed = tolerantParse(input[key]);

    return {
      priceChange: toCurrency(parsed.priceChange, fromCurrency),
      priceChangePercent: parsed.priceChangePercent,
    };
  };

  return {
    ...input,
    id: input.symbol,
    market_cap: toCurrency(input.market_cap, fromCurrency),
    price: toCurrency(input.price, fromCurrency),
    sparkline: tolerantParse(input.sparkline),
    history_1h: buildHistoricalData("history_1h"),
    history_1d: buildHistoricalData("history_1d"),
    history_7d: buildHistoricalData("history_7d"),
    history_30d: buildHistoricalData("history_30d"),
    history_365d: buildHistoricalData("history_365d"),
  };
};

export default transform;
