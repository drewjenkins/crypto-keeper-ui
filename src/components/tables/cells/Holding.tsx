"use es6";

import React from "react";
import { Symbol } from "../../../../types";
import { formatAmount } from "../../../utils/formatting";
import Cell from "./Cell";

type CoinCellProps = {
  marketValue: string;
  quantity: number;
  symbol: Symbol;
};

const Holding = ({ marketValue, quantity, symbol }: CoinCellProps) => (
  <Cell>
    <span>{marketValue}</span>
    <span className="light secondary">
      {formatAmount(quantity)} {symbol}
    </span>
  </Cell>
);

export default Holding;
