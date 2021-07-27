"use es6";

import React from "react";
import { CryptoTransaction, TableColumns } from "../../../types/index";
import { TableNames } from "../../constants/index";
import transactionStore from "../../store/transactions";
import { numberField, timeField } from "../../utils/fields";
import BaseChart from "./BaseChart";
import CoinCell from "./cells/CoinCell";

const columns: TableColumns = [
  {
    field: "coin",
    headerName: "Coin",
    width: 250,
    renderCell: (params) => <CoinCell coin={params.value} />,
  },
  timeField({
    field: "timestamp",
    headerName: "Time",
  }),
  {
    field: "description",
    headerName: "Desc",
    width: 160,
  },
  {
    field: "label",
    headerName: "Label",
    width: 160,
  },
  numberField({
    field: "amount",
    headerName: "Amount",
    width: 105,
  }),
  {
    field: "type",
    headerName: "Transaction Kind",
    hide: false,
    width: 300,
  },
];

const mapData = (row: CryptoTransaction, index: number) => ({
  ...row,
  id: index,
  label: `${row.crypto.label} (${row.crypto.symbol})`,
});

const RawDataTable = () => {
  const transactions = transactionStore.useState((s) => s.transactions);

  return (
    <BaseChart
      id={TableNames.RawDataTable}
      rows={transactions.map(mapData)}
      columns={columns}
    />
  );
};

export default RawDataTable;
