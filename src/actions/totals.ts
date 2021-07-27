import { CryptoTransaction, Position, Totals } from "../../types";
import { updateDebugInfo } from "../actions/misc";
import transform from "../adapters/totals";
import getState from "../store";
import positionsStore from "../store/positions";
import totalsStore from "../store/totals";
import transactionsStore from "../store/transactions";
import { formatCurrency, formatPercentage } from "../utils/formatting";

export const updateTotals = async (
  positions?: Array<Position>,
  transactions?: Array<CryptoTransaction>
): Promise<Totals> => {
  const _positions = positions || positionsStore.getRawState().positions;
  const _transactions =
    transactions || transactionsStore.getRawState().transactions;
  const updatedTotals = transform(_positions, _transactions);
  totalsStore.update((store) => {
    store.totals = updatedTotals;
  });

  if (updatedTotals.dayPercent) {
    document.title = `Day - ${formatCurrency(
      updatedTotals.day
    )} (${formatPercentage(updatedTotals.dayPercent, true)}) | CK`;
  }

  updateDebugInfo({ totalsLastUpdated: new Date().toLocaleTimeString() });
  return updatedTotals;
};

export const recalculate = () => {
  const updatedTotals = transform(
    getState().positions,
    getState().transactions
  );
  totalsStore.update((store) => {
    store.totals = updatedTotals;
  });
};
