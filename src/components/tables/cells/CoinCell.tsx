"use es6";

import styled from "@emotion/styled";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import Tooltip from "@material-ui/core/Tooltip";
import React from "react";
import { Crypto, Symbol } from "../../../../types";
import { blue } from "../../../colors";
import { getCryptoBySymbol } from "../../../store/ticker";

type CoinCellProps = {
  coin: Symbol;
  rank?: number;
  holding?: boolean;
  icon?: StaticRange;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-items: start;
`;

const Light = styled.span`
  font-size: 0.75rem;
  color: #8194a5;
`;

const CoinCell = ({ coin = "???", rank, holding }: CoinCellProps) => {
  const crypto: Crypto = getCryptoBySymbol(coin);

  return (
    <Container>
      <Tooltip
        title={`You are holding ${coin}`}
        aria-label={`You are holding ${coin}`}
      >
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width={15}>
          {holding && <circle fill={blue} cx="10" cy="10" r="5"></circle>}
        </svg>
      </Tooltip>

      <Avatar
        style={{ width: 30, height: 30, marginLeft: 5 }}
        alt={coin}
        src={crypto?.icon_url}
      >
        $
      </Avatar>

      <div
        style={{
          lineHeight: 1.3,
          marginLeft: 15,
          display: "grid",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Link
          href={`https://www.cointracker.io/price/${coin.toLowerCase()}`}
          target="_blank"
        >
          {coin}
        </Link>
        <Light>{crypto?.label || coin}</Light>
      </div>
    </Container>
  );
};

export default React.memo(CoinCell);
