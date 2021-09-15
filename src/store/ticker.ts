import { Store } from "pullstate";
import { Crypto } from "../../types";
import Positions from "./positions";

const Ticker = new Store({ tickerData: [], lastUpdated: Date.now() });

export const getCryptoBySymbol = (symbol: any): Crypto =>
  Ticker.getRawState().tickerData.find((t: Crypto) => t.id === symbol) ||
  Positions.getRawState().positions.find((t: Crypto) => t.id === symbol);

export const getLastUpdated = () => Ticker.getRawState().lastUpdated;

export default Ticker;
