import { ExchangeRateTypes } from "../../types/index";
import { fetchExchangeRates } from "../api/exchangeRates";
import exchangeRatesStore from "../store/exchangeRates";
import { recalculate as recalculatePositions } from "./positions";
import { recalculate as recalculateMarketPrices } from "./ticker";
import { recalculate as recalculateTotals } from "./totals";

export const updateExchangeRates = async (data?: any) => {
  const exchangeRates = await fetchExchangeRates();
  exchangeRatesStore.update((store) => {
    store.exchangeRates = exchangeRates;
  });
};

export const updatePreferredCurrency = async (currency: ExchangeRateTypes) => {
  exchangeRatesStore.update((store) => {
    store.previousCurrency = store.preferredCurrency || "USD";
    store.preferredCurrency = currency;
  });

  try {
    localStorage.setItem("favCurrency", currency);
  } catch (e) {}

  recalculateMarketPrices();
  await recalculatePositions();
  recalculateTotals();
};
