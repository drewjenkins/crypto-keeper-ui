import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";
import { TransactionType, unknownTransactionKinds } from "../../types";

export const auditTransactions = (transformedTransactions, csv) => {
  const unknownTransactions = transformedTransactions
    .filter((t) => t.type === TransactionType.unknown)
    .map((t) => t.rawType);
  const rawUnknownTransactions = csv.filter((d) =>
    unknownTransactions.includes(d["Transaction Kind"])
  );

  if (rawUnknownTransactions.length) {
    Sentry.captureMessage(`Encountered unknown transaction types`, {
      extra: {
        rawUnknownTransactions,
      },
    });
  }

  const unsureTransactions = csv.filter((d) =>
    unknownTransactionKinds.includes(d["Transaction Kind"])
  );

  if (unsureTransactions.length) {
    Sentry.captureMessage(`Encountered unsure transaction types`, {
      extra: {
        unsureTransactions,
      },
    });
  }
};

const initSentry = () =>
  Sentry.init({
    dsn:
      "https://9c26159338e24ce0a136c263923794d8@o543287.ingest.sentry.io/5663280",
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
export default initSentry;
