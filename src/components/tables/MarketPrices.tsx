"use es6";

import React from "react";
import { Crypto } from "../../../types";
import { updatePage } from "../../actions/ticker";
import { fetchRowCount } from "../../api/crypto";
import { TableNames } from "../../constants/index";
import positionsStore from "../../store/positions";
import tickerDataStore from "../../store/ticker";
import { currencyField, percentageField } from "../../utils/fields";
import { formatCurrency, formatPercentage } from "../../utils/formatting";
import BaseChart from "./BaseChart";
import Cell from "./cells/Cell";
import ChartCell from "./cells/ChartCell";
import CoinCell from "./cells/CoinCell";

const columns = [
  {
    field: "symbol",
    headerName: "Coin",
    width: 200,
    renderCell: (params) => (
      <CoinCell holding={params.row.holding} coin={params.value} />
    ),
  },
  currencyField({
    field: "price",
    headerName: "Price",
    width: 100,
  }),
  percentageField({
    field: "dayChange",
    headerName: "24h Change",
    width: 110,
  }),
  currencyField({
    field: "marketCap",
    headerName: "Market Cap",
    width: 110,
  }),
  percentageField({
    field: "weekChange",
    headerName: "7d Change",
    width: 110,
  }),
  percentageField({
    field: "monthChange",
    headerName: "30d Change",
    width: 110,
  }),
  percentageField({
    field: "yearChange",
    headerName: "365d Change",
    width: 120,
  }),
  {
    field: "sparkline",
    headerName: "7d Price Chart",
    width: 170,
    renderCell: (params) => <ChartCell values={params.value} />,
    sortComparator: (a, b) => (a[a.length - 1] < b[b.length] - 1 ? -1 : 1),
  },
  {
    field: "tradeable",
    headerName: "Tradeable?",
    width: 120,
    renderCell: (params) => <Cell>{params.value}</Cell>,
  },
];

const mapData = (data: Crypto) => ({
  ...data,
  marketCap: formatCurrency(data.market_cap),
  price: formatCurrency(data.price),
  dayChange: formatPercentage(data.history_1d.priceChangePercent),
  weekChange: formatPercentage(data.history_7d.priceChangePercent),
  monthChange: formatPercentage(data.history_30d.priceChangePercent),
  yearChange: formatPercentage(data.history_365d.priceChangePercent),
  tradeable: data.tradeable ? "Yes" : "No",
  holding: positionsStore
    .getRawState()
    .positions.find((p) => p.symbol === data.id),
  sparkline: data.sparkline,
});

const MarketPricesTable = () => {
  let interval;
  const [page, setPage] = React.useState(0);
  const [rowCount, setRowCount] = React.useState(undefined);

  React.useEffect(() => {
    clearInterval(interval);
    interval = setInterval(() => {
      updatePage(page, false);
    }, 10000);
    updatePage(page, false);
    countRows();

    return () => {
      clearInterval(interval);
    };
  }, [page]);

  const countRows = async () => {
    const rows = await fetchRowCount();
    setRowCount(rows);
  };

  const _updatePage = ({ page }) => {
    setPage(page);
  };

  const data = tickerDataStore.useState((s) => s.tickerData);

  return (
    <BaseChart
      rows={data.map(mapData)}
      columns={columns}
      id={TableNames.MarketPricesTable}
      onPageChange={_updatePage}
      loading={data.length === 0 || rowCount === 0}
      rowCount={rowCount}
    />
  );
};

export default MarketPricesTable;
