import uniq from "lodash/uniq";
import { CryptoTransaction, Position } from "../../types";
import { updateDebugInfo } from "../actions/misc";
import { updateTotals } from "../actions/totals";
import transformTicker from "../adapters/nomicsTickerAdapter";
import transform from "../adapters/transactionsToPositions";
import getState from "../store";
import positionsStore from "../store/positions";

export const updatePositions = async (
  _transactions?: Array<CryptoTransaction>
): Promise<Array<Position>> => {
  const { transactions } = getState();
  const query = uniq((_transactions || transactions).map((d) => d.symbol));
  if (!query.length) return [];
  const res = await fetch(
    `${SERVER}/api/crypto?symbols=${encodeURIComponent(query)}`
  );
  const matches = await res.json();
  const tickerData = matches.map((d) => transformTicker(d, "USD"));
  const updatedPositions = transform(_transactions || transactions, tickerData);

  positionsStore.update((store) => {
    store.positions = [...updatedPositions];
  });
  updateDebugInfo({ positionsLastUpdated: new Date().toLocaleTimeString() });
  updateTotals(updatedPositions);

  return [...updatedPositions];
};

export const recalculate = async () => updatePositions();
