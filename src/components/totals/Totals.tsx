"use es6";

import styled from "@emotion/styled";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Totals } from "../../../types";
import totalsStore from "../../store/totals";
import {
  formatAmount,
  formatCurrency,
  formatPercentage,
} from "../../utils/formatting";
import GainLoss from "../currency/GainLoss";
import UploadButton from "../header/UploadButton";

type TotalsProps = {};

const Container = styled(Grid)`
  @media screen and (max-height: 500px) {
    display: none;
    visibility: hidden;
  }
`;

const useStyles = makeStyles((theme) => ({
  paper: {
    marginBottom: 5,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "130px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
  title: {
    flex: "1 0 25%",
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  children: {
    flex: "1 1 50%",
    margin: 0,
  },
  gainLoss: {
    alignItems: "center",
    justifyContent: "center",
    "& .value": {
      fontSize: "2rem !important",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem !important",
      },
    },
    "& .percent": {
      fontSize: 20,
      marginLeft: 10,
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.7rem !important",
      },
    },
  },
  portfolio: {
    display: "flex",
    flexDirection: "column",
    fontSize: "2rem !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem !important",
    },
  },
  costBasis: {
    fontSize: "1rem !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.4rem !important",
    },
  },
  totals: {
    display: "flex",
    flexDirection: "column",
  },
  placeholder: {
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  cashback: {
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem !important",
    },
  },
}));

const Totals = (props: TotalsProps) => {
  const totals = totalsStore.useState((s) => s.totals);
  const classes = useStyles();

  if (totals.portfolioValue === 0) {
    return null;
  }

  const Card = (title: string, children: any) => (
    <Container
      item
      // @ts-ignore
      xs={Math.floor(12 / (!!totals.cashback ? 4 : 3))}
    >
      <Paper className={classes.paper}>
        {totals.portfolioValue === 0 ? (
          <div className={classes.placeholder}>
            Upload Transactions to see totals
            <UploadButton mobile />
          </div>
        ) : (
          <>
            <h3 className={classes.title}>{title}</h3>
            <div className={classes.children}>{children}</div>
          </>
        )}
      </Paper>
    </Container>
  );

  return (
    <Container container spacing={window.innerWidth < 600 ? 1 : 5}>
      {Card(
        "Portfolio Value",
        <div className={classes.portfolio}>
          {formatCurrency(totals.portfolioValue)}
          <span className={classes.costBasis}>
            {formatCurrency(totals.overallCostBasis)} (Cost Basis)
          </span>
        </div>
      )}
      {Card(
        "Day Change",
        <GainLoss
          className={classes.gainLoss}
          gainLoss={formatCurrency(totals.day)}
          gainLossPercent={formatPercentage(totals.dayPercent)}
          rawGainLoss={totals.day}
          flip
        />
      )}
      {Card(
        "Overall Change",
        <GainLoss
          className={classes.gainLoss}
          gainLoss={formatCurrency(totals.overall)}
          gainLossPercent={formatPercentage(totals.overallPercent)}
          rawGainLoss={totals.overall}
          flip
        />
      )}
      {!!totals.cashback &&
        Card(
          "Cashback Rewards",
          <div className={classes.totals}>
            <span className={classes.portfolio}>
              {formatCurrency(totals.cashback)}
            </span>
            <span className={classes.cashback}>
              {formatAmount(totals.cashbackQuantity)} CRO
            </span>
          </div>
        )}
    </Container>
  );
};

export default Totals;
