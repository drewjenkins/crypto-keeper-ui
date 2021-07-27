"use es6";

import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import * as Sentry from "@sentry/browser";
import { useSnackbar } from "notistack";
import React from "react";
import { updateTransactions } from "../../actions/transactions";
import crypto from "../../constants/mockData.csv";
import totalsStore from "../../store/totals";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
      position: "relative",
    },
    input: {
      display: "none",
    },
    button: {},
    paper: {
      maxWidth: 200,
      padding: theme.spacing(1),
    },
  })
);

const UploadButton = (props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const userUploaded = totalsStore.useState((s) => !!s.totals.portfolioValue);
  const classes = useStyles();
  const rootEl = React.useRef(null);
  const [popupOpen, setPopupOpen] = React.useState(true);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(await updateTransactions(e.target.files[0]))) {
      enqueueSnackbar("Error uploading transactions. Is it a valid CSV file?", {
        variant: "error",
      });
    }
    Sentry.captureMessage("User did an upload");
  };

  return (
    <div className={classes.root} ref={rootEl}>
      <input
        accept=".csv"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleUpload}
      />
      <label
        style={{ display: "flex", justifyContent: "center" }}
        htmlFor="contained-button-file"
      >
        <Button
          component="span"
          variant="text"
          color="primary"
          id="uploadButton"
          className={classes.button}
        >
          <CloudUploadIcon />
          {!props.mobile && (
            <span style={{ marginLeft: 5 }}>Transaction History</span>
          )}
        </Button>
      </label>
      {rootEl?.current && !userUploaded && (
        <Popper
          onClick={() => setPopupOpen(false)}
          placement="bottom-start"
          open={popupOpen}
          anchorEl={rootEl.current}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper className={classes.paper}>
                <div>
                  To use the app, upload your Crypto.com transaction history
                  here. Just want to see how the app works?
                </div>
                <Link
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    Sentry.captureMessage("User used mock data");
                    updateTransactions(undefined, crypto);
                  }}
                >
                  Click here
                </Link>{" "}
                and we'll upload some mock data
              </Paper>
            </Fade>
          )}
        </Popper>
      )}
    </div>
  );
};

export default UploadButton;
