"use es6";

import styled from "@emotion/styled";
import React from "react";
import Cell from "./Cell";

type CoinCellProps = {
  costBasis: string;
  costPerShare: string;
  symbol: string;
};

const Light = styled.span`
  font-size: 0.75rem;
  color: #8194a5;
  text-align: right;
`;

const costBasis = ({ costBasis, costPerShare, symbol }: CoinCellProps) => (
  <Cell>
    <span>{costBasis}</span>
    <span className="secondary light">
      {costPerShare} per {symbol}
    </span>
  </Cell>
);

export default costBasis;
