import { AbbreviateCurrency } from "abbreviate-currency";
import { getPreferredCurrency } from "../store/exchangeRates";

const americanEnglishUsd = new AbbreviateCurrency({
  language: "en-US",
  digitGroups: [
    { symbol: "M", digits: 7 }, // 1,000,000+ (7 digits or more.)
    { symbol: "B", digits: 10 }, // 1,000,000,000+ (10 digits or more.)
    { symbol: "T", digits: 13 }, // 1,000,000,000,000+ (13 digits or more.)],
  ],
});

export const formatAmount = (amount) => {
  const asNumber = Number(amount);
  const asString = `${amount}`;
  const dec = asString.split(".")[1];
  if (!dec) return asString;
  if (asNumber < 1 && asNumber > 0) {
    if (dec.length < 2) return `${asNumber.toFixed(dec.length)}`;
    return `${asNumber.toFixed(3)}`;
  }
  if (dec.length < 2) return `${asNumber.toFixed(dec.length)}`;
  return `${asNumber.toFixed(2)}`;
};

export const formatCurrency = (amount) => {
  const asNumber = parseFloat(amount);
  return asNumber > 100000 && getPreferredCurrency() === "USD"
    ? americanEnglishUsd.transform(amount)
    : `${new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: getPreferredCurrency(),
        minimumFractionDigits: Math.abs(amount) > 1 ? 2 : 3,
        maximumFractionDigits: Math.abs(amount) > 1 ? 2 : 3,
      }).format(asNumber)}`;
};

export const formatPercentage = (percent, showPlus = false) => {
  const asNumber = parseFloat(percent) * 100;
  return `${asNumber > 0 && showPlus ? "+" : ""}${asNumber.toFixed(2)}%`;
};

export const formatDate = (timestamp) => new Date(timestamp).toDateString();

export const formatTime = (timestamp) =>
  new Date(timestamp).toLocaleTimeString();

export const normalize = (str = "") =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]/, "");
