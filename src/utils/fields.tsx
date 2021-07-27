"use es6";

import React from "react";
import { TableField } from "../../types/index";
import Currency from "../components/currency/Currency";
import Cell from "../components/tables/cells/Cell";
import TrendCell from "../components/tables/cells/TrendCell";
import { formatAmount, formatDate } from "./formatting";
import { convertCurrencyToNumber, convertPercentageToNumber } from "./utils";

export const stringField = (overrides: TableField = {} as TableField) => ({
  width: 150,
  renderCell: (params) => (
    <Cell>
      <span>{params.value}</span>
    </Cell>
  ),
  ...overrides,
});

export const timeField = (
  overrides: TableField = {} as TableField
): TableField => ({
  width: 150,
  sortComparator: (a, b) =>
    new Date(a).valueOf() < new Date(b).valueOf() ? -1 : 1,
  renderCell: (params) => <Cell>{formatDate(params.value)}</Cell>,
  ...overrides,
});

export const numberField = (
  overrides: TableField = {} as TableField
): TableField => ({
  sortComparator: (a, b) =>
    Number.parseFloat(a) < Number.parseFloat(b) ? -1 : 1,
  renderCell: (params) => <Cell>{formatAmount(params.value)}</Cell>,
  ...overrides,
});

export const currencyField = (
  overrides: TableField = {} as TableField,
  colorize: boolean = false
): TableField => ({
  sortComparator: (a, b) =>
    convertCurrencyToNumber(a) < convertCurrencyToNumber(b) ? -1 : 1,
  width: 170,
  renderCell: (params) => <Currency colorize={colorize} value={params.value} />,
  ...overrides,
});

export const percentageField = (
  overrides: TableField = {} as TableField,
  hideArrow = false
): TableField => ({
  sortComparator: (a, b) =>
    convertPercentageToNumber(a) < convertPercentageToNumber(b) ? -1 : 1,
  width: 160,
  renderCell: (params) => (
    <TrendCell
      currentValue={convertPercentageToNumber(params.value)}
      lastValue={0}
      valueLabel={params.value}
      hideArrow={hideArrow}
    />
  ),
  ...overrides,
});
