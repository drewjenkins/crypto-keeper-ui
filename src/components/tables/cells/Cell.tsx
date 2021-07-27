"use es6";

import styled from "@emotion/styled";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { green, light, lightGreen, lightRed, red } from "../../../colors";

const CellStyle = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
  flex: 1 1 auto;
  text-align: right;
  position: relative;

  > * {
    text-align: right;
  }

  > .red {
    color: ${red};
  }

  > .green {
    color: ${green};
  }

  > .lightGreen {
    color: ${lightGreen};
  }

  > .lightRed {
    color: ${lightRed};
  }

  > .secondary {
    font-size: 0.75rem;
  }

  > .light {
    color: ${light};
  }
`;

const Cell = (props) => (
  <ErrorBoundary fallback={<div>...</div>}>
    <CellStyle className={props.className}>{props.children}</CellStyle>
  </ErrorBoundary>
);

export default Cell;
