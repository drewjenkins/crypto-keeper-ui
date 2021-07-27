"use es6";

import React from "react";
import { TableNames } from "../../constants";
import positionStore from "../../store/positions";
import transactionStore from "../../store/transactions";
import {
  currencyField,
  numberField,
  stringField,
  timeField,
} from "../../utils/fields";
import {
  formatAmount,
  formatCurrency,
  formatDate,
} from "../../utils/formatting";
import BaseChart from "./BaseChart";
import CoinCell from "./cells/CoinCell";

const columns = [
  {
    field: "coin",
    headerName: "Coin",
    width: 200,
    renderCell: (params) => (
      <CoinCell coin={params.value} holding={params.row.holding} />
    ),
  },
  numberField({ field: "amount", headerName: "Amount", width: 120 }),
  timeField({ field: "date", headerName: "Date" }),
  currencyField({ field: "pricePer", headerName: "Price Per", width: 120 }),
  currencyField({ field: "costBasis", headerName: "Cost Basis", width: 120 }),
  stringField({
    field: "description",
    headerName: "Description",
    width: 250,
  }),
  stringField({
    field: "type",
    headerName: "Transaction Type",
    width: 120,
  }),
  stringField({
    field: "rawType",
    headerName: "Raw Type",
    width: 120,
  }),
];

const mapData = (data) => ({
  ...data,
  amount: formatAmount(data.amount),
  date: formatDate(data.timestamp),
  costBasis: formatCurrency(data.costBasis),
  pricePer: formatCurrency(data.pricePerUnit),
  pricePaid: formatCurrency(data.transactionAmount),
});

const TransactionLog = () => {
  const transactions = transactionStore.useState((s) => s.transactions);
  const positions = positionStore.useState((s) => s.positions);

  const data = transactions.map((d) =>
    mapData({ ...d, holding: positions.some((p) => p.symbol === d.symbol) })
  );
  return (
    <BaseChart
      rows={data}
      columns={columns}
      id={TableNames.TransactionLogTable}
    />
  );
};

export default TransactionLog;
