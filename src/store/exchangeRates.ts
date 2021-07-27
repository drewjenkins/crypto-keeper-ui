import { Store } from "pullstate";
import { ExchangeRateTypes } from "../../types/index";

const getPreferredCurrencyFromStorage = () => {
  let currency = "USD";
  try {
    currency = localStorage.getItem("favCurrency");
  } catch (e) {}

  return currency || "USD";
};

const ExchangeRates = new Store({
  preferredCurrency: getPreferredCurrencyFromStorage(),
  previousCurrency: "USD",
  exchangeRates: {
    base: "USD",
    rates: {
      CAD: 1.2647998655,
      HKD: 7.7621089808,
      ISK: 127.9011099899,
      PHP: 48.5872855701,
      DKK: 6.2534476959,
      HUF: 309.0144635049,
      CZK: 22.053481332,
      GBP: 0.7202741339,
      RON: 4.1090649176,
      SEK: 8.5187521023,
      IDR: 14405.0033636058,
      INR: 72.9986545577,
      BRL: 5.7859905819,
      RUB: 73.9778002018,
      HRK: 6.3794988227,
      JPY: 108.5771947528,
      THB: 30.7702657249,
      CHF: 0.930793811,
      EUR: 0.8409014464,
      MYR: 4.1264715775,
      BGN: 1.6446350488,
      TRY: 7.5907332661,
      CNY: 6.5113521695,
      NOK: 8.4773797511,
      NZD: 1.3950554995,
      ZAR: 15.282542886,
      USD: 1.0,
      MXN: 21.20930037,
      SGD: 1.3470400269,
      AUD: 1.2975109317,
      ILS: 3.3242515977,
      KRW: 1141.1453077699,
      PLN: 3.8472922973,
    },
  },
});

export const toCurrency = (
  amount: number,
  fromCurrency?: ExchangeRateTypes,
  toCurrency?: ExchangeRateTypes
) => {
  return (
    (ExchangeRates.getRawState().exchangeRates.rates[
      toCurrency || ExchangeRates.getRawState().preferredCurrency
    ] /
      ExchangeRates.getRawState().exchangeRates.rates[
        fromCurrency || ExchangeRates.getRawState().previousCurrency
      ]) *
    amount
  );
};

export const getPreferredCurrency = () =>
  ExchangeRates.getRawState().preferredCurrency as ExchangeRateTypes;

export const getPreferredCurrencySymbol = () =>
  getCurrencySymbol(
    ExchangeRates.getRawState().preferredCurrency as ExchangeRateTypes
  );

export const convertEurToUSD = (amount: number): number =>
  (1 / ExchangeRates.getRawState().exchangeRates.rates.EUR) * amount;

export const convertUSDToEur = (amount: number): number =>
  amount * ExchangeRates.getRawState().exchangeRates.rates.EUR;

export const convertUSDToOther = (amount: number, symbol: ExchangeRateTypes) =>
  amount * ExchangeRates.getRawState().exchangeRates.rates[symbol];

export const convertOtherToUSD = (amount: number, symbol: ExchangeRateTypes) =>
  (1 / ExchangeRates.getRawState().exchangeRates.rates[symbol]) * amount;

export const getCurrencySymbol = (symbol: ExchangeRateTypes) => {
  switch (symbol) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    case "CNY":
      return "¥";
    case "JPY":
      return "¥";
    default:
      return symbol;
  }
};

export default ExchangeRates;
