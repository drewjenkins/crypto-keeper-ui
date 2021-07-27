"use es6";

import React from "react";
import { convertCurrencyToNumber } from "../../utils/utils";
import Cell from "../tables/cells/Cell";

type CurrencyProps = {
  value: string;
  colorize: boolean;
};
const Currency = (props: CurrencyProps) => (
  <Cell>
    <span
      className={
        props.colorize
          ? convertCurrencyToNumber(props.value) > 0
            ? "green"
            : "red"
          : ""
      }
    >
      {props.value}
    </span>
  </Cell>
);

export default Currency;
