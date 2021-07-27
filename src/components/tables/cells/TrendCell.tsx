"use es6";

import styled from "@emotion/styled";
import React from "react";
import TrendArrow from "../../currency/TrendArrow";
import Cell from "./Cell";

type TrendCellProps = {
  currentValue: number;
  lastValue: number;
  valueLabel: string;
  hideArrow?: boolean;
};

const Value = styled.span`
  margin-left: 5px;
  ${(props: { hideArrow?: boolean; currentValue: number }) =>
    !props.hideArrow && `color: ${props.currentValue > 0 ? "green" : "red"};`}
`;

const Trend = styled.span`
  display: flex;
  justify-content: flex-end;
`;

const TrendCell = (props: TrendCellProps) => (
  <Cell>
    <Trend>
      <Value hideArrow={props.hideArrow} currentValue={props.currentValue}>
        {props.valueLabel}
      </Value>
      {!props.hideArrow && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <TrendArrow
            currentValue={props.currentValue}
            lastValue={props.lastValue}
            hideTooltip={true}
          />
        </div>
      )}
    </Trend>
  </Cell>
);

export default React.memo(TrendCell);
