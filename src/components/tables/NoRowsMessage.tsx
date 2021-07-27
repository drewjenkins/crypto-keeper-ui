"use es6";
import styled from "@emotion/styled";
import CircularProgress from "@material-ui/core/CircularProgress";
import Link from "@material-ui/core/Link";
import React from "react";
import { TableNames } from "../../constants/index";
import UploadButton from "../header/UploadButton";

const Overlay = styled.div`
  max-height: 75%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: rgba(250, 250, 250, 0.38);
  z-index: 2;
`;

const NoRowsMessage = (props) => {
  const showUploadMessage = [
    TableNames.TransactionLogTable,
    TableNames.PositionsTable,
    TableNames.RawDataTable,
  ].includes(props.tableId);

  return showUploadMessage ? (
    <Overlay>
      <span>
        Upload your exported Crypto.com{" "}
        <Link
          href="https://help.crypto.com/en/articles/3438579-how-do-i-export-my-transaction-history"
          target="_blank"
        >
          transaction history
        </Link>{" "}
        to get started
      </span>
      {<UploadButton />}
    </Overlay>
  ) : (
    <Overlay>
      <CircularProgress />
    </Overlay>
  );
};

export default NoRowsMessage;
