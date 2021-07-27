import debounce from "lodash/debounce";
import { updateDebugInfo } from "../actions/misc";
import transform from "../adapters/nomicsTickerAdapter";
import { fetchTickerData } from "../api/crypto";
import tickerStore from "../store/ticker";

export const getTicker = async () => fetchTickerData();

export const recalculate = () => {
  tickerStore.update((store) => {
    store.tickerData = tickerStore
      .getRawState()
      .tickerData.map((d) => transform(d));
    store.lastUpdated = Date.now();
  });
};

export const setTickerData = (data) => {
  tickerStore.update((store) => {
    store.tickerData = data;
    store.lastUpdated = Date.now();
  });
};

const _updatePage = async (page: number, resetData: boolean = true) => {
  resetData && setTickerData([]);

  const data = await fetch(
    `https://api.crypto-keeper.io/api/ticker?page=${page}`
  );
  const res = await data.json();
  const transformedData = res.map((h) => transform(h, "USD"));
  setTickerData(transformedData);
  updateDebugInfo({ tickerLastUpdated: new Date().toLocaleTimeString() });
};
export const updatePage = debounce(_updatePage, 250);

export const initializeTicker = async () => _updatePage(0, false);
