import { Store } from "pullstate";
import { CryptoTransaction } from "../../types";

const Transactions = new Store({
  transactions: [] as Array<CryptoTransaction>,
});

export default Transactions;
