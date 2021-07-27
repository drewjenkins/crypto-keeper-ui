import exchangeRatesStore from "./exchangeRates";
import miscStore from "./misc";
import positionsStore from "./positions";
import tickerStore from "./ticker";
import totalsStore from "./totals";
import transactionsStore from "./transactions";

const combineStores = () => ({
  tickerData: tickerStore.getRawState().tickerData,
  transactions: transactionsStore.getRawState().transactions,
  positions: positionsStore.getRawState().positions,
  positionsTicker: positionsStore.getRawState().positionsTicker,
  totals: totalsStore.getRawState().totals,
  exchangeRates: exchangeRatesStore.getRawState(),
  misc: miscStore.getRawState(),
});

setInterval(() => {
  (window as any).store = (window as any).state = combineStores();
}, 1000);

export default combineStores;
