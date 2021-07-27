"use es6";

import React from "react";
import Cell from "../tables/cells/Cell";

type CoinCellProps = {
  gainLoss: string;
  gainLossPercent: string;
  rawGainLoss: number;
  flip?: boolean;
  className?: string;
};

const GainLoss = ({
  rawGainLoss,
  gainLoss,
  gainLossPercent,
  flip,
  className,
}: CoinCellProps) => {
  const gained = rawGainLoss > 0;

  const percent = (
    <span className={`${gained ? "green" : "red"} percent`}>
      {gainLossPercent}
    </span>
  );
  const val = (
    <span className={`secondary ${gained ? "green" : "red"} value`}>
      {gainLoss}
    </span>
  );

  return (
    <Cell className={className}>
      {flip ? (
        <>
          {val}
          {percent}
        </>
      ) : (
        <>
          {percent}
          {val}
        </>
      )}
    </Cell>
  );
};

export default GainLoss;
