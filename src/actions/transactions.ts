import flatMap from "lodash/flatMap";
import { CryptoTransaction, RawTransaction } from "../../types/index";
import transform from "../adapters/croTransactionToTransaction";
import { uploadCSV } from "../api/csv";
import transactionStore from "../store/transactions";
import { auditTransactions } from "../utils/sentry";
import { updatePositions } from "./positions";
import { updateTotals } from "./totals";

export const updateTransactions = async (
  file?: File,
  asObject?: Array<RawTransaction>
) => {
  let csv;
  if (file) {
    try {
      csv = await uploadCSV(file);
    } catch (e) {
      return;
    }
  } else if (asObject) {
    csv = asObject;
  } else return;

  const filteredTransactions = csv.filter((d) => !!d["Timestamp (UTC)"]);
  const transformedTransactions: Array<CryptoTransaction> = flatMap(
    filteredTransactions.map(transform)
  );

  auditTransactions(transformedTransactions, csv);

  transactionStore.update((s) => {
    // @ts-ignore
    s.transactions = transformedTransactions;
  });

  const positions = await updatePositions(transformedTransactions);
  updateTotals(positions, transformedTransactions);

  return true;
};
