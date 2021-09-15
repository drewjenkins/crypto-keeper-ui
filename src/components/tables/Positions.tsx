"use es6";

import React from "react";
import { Position } from "../../../types";
import { updatePositions } from "../../actions/positions";
import { TableNames } from "../../constants/index";
import positionsStore from "../../store/positions";
import { getCryptoBySymbol } from "../../store/ticker";
import { currencyField, percentageField } from "../../utils/fields";
import { formatCurrency, formatPercentage } from "../../utils/formatting";
import GainLoss from "../currency/GainLoss";
import BaseChart from "./BaseChart";
import ChartCell from "./cells/ChartCell";
import CoinCell from "./cells/CoinCell";
import CostBasis from "./cells/CostBasis";
import Holding from "./cells/Holding";

const columns = [
  {
    field: "coin",
    headerName: "Coin",
    width: 200,
    renderCell: (params) => {
      return <CoinCell holding={true} coin={params.value} />;
    },
  },
  currencyField({
    field: "price",
    headerName: "Price",
    width: 100,
  }),
  {
    field: "marketValue",
    headerName: "Holdings",
    width: 100,
    renderCell: (params) => (
      <Holding
        symbol={params.row.symbol}
        quantity={params.row.quantity}
        marketValue={params.row.marketValue}
      />
    ),
    sortComparator: (a, b) => (a > b ? -1 : 1),
  },
  {
    field: "costBasis",
    headerName: "Cost Basis",
    width: 150,
    renderCell: (params) => (
      <CostBasis
        costBasis={params.row.costBasis}
        costPerShare={params.row.costPerShare}
        symbol={params.row.symbol}
      />
    ),
  },
  {
    field: "rawGainLoss",
    headerName: "Gain/Loss",
    width: 100,
    renderCell: (params) => (
      <GainLoss
        rawGainLoss={params.row.rawGainLoss}
        gainLoss={params.row.gainLoss}
        gainLossPercent={params.row.gainLossPercent}
      />
    ),
  },
  currencyField({
    field: "hourChange",
    headerName: "One Hour",
    width: 140,
    renderCell: (params) => (
      <GainLoss
        rawGainLoss={params.row.rawHourChange}
        gainLoss={params.row.hourChange}
        gainLossPercent={params.row.hourChangePercent}
      />
    ),
  }),
  currencyField({
    field: "dayChange",
    headerName: "Day Change",
    width: 140,
    renderCell: (params) => (
      <GainLoss
        rawGainLoss={params.row.rawDayChange}
        gainLoss={params.row.dayChange}
        gainLossPercent={params.row.dayChangePercent}
      />
    ),
  }),
  percentageField(
    {
      field: "portfolioPercentage",
      headerName: "% of Portfolio",
      width: 120,
    },
    true
  ),
  {
    field: "sparkline",
    headerName: "7d Price Chart",
    width: 170,
    renderCell: (params) => <ChartCell values={params.value} />,
  },
];

const PositionsTable = () => {
  let interval;
  React.useEffect(() => {
    interval = setInterval(() => {
      updatePositions();
    }, 10000);
    updatePositions();
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <BaseChart
      rows={positionsStore
        .useState((s) => s.positions)
        .map((data: Position) => ({
          ...data,
          price: formatCurrency(data.price),
          marketValue: formatCurrency(data.marketValue),
          costBasis: formatCurrency(data.costBasis),
          costPerShare: formatCurrency(data.costPerShare),
          dayChangePercent: formatPercentage(data.dayChangePercent),
          dayChange: formatCurrency(data.dayChange),
          rawDayChange: data.dayChange,
          hourChangePercent: formatPercentage(data.hourChangePercent),
          hourChange: formatCurrency(data.hourChange),
          rawHourChange: data.hourChange,
          gainLoss: formatCurrency(data.gainLoss),
          rawGainLoss: data.gainLoss,
          gainLossPercent: formatPercentage(data.gainLossPercent),
          portfolioPercentage: formatPercentage(data.portfolioPercentage),
          sparkline: getCryptoBySymbol(data.symbol)?.sparkline || [],
        }))}
      columns={columns}
      id={TableNames.PositionsTable}
    />
  );
};

export default PositionsTable;
