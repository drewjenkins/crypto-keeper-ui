import cryptos from "../constants/cryptos";
import { normalize } from "../utils/formatting";
import { CryptoName } from "../../types/index";

export const utcStringToTimestamp = (utcString) =>
  !utcString ? undefined : new Date(utcString.replace(/-/g, "/")).valueOf();

export const getCryptoByLabel = (label) => {
  const match = cryptos.find(
    (c: CryptoName) => normalize(c.label) === normalize(label)
  );
  return match || { label, symbol: label, tradeable: false };
};

export const getCryptoBySymbol = (symbol) => {
  const match = cryptos.find(
    (c: CryptoName) => normalize(c.symbol) === normalize(symbol)
  );
  return match || { label: symbol, symbol, tradeable: false };
};
