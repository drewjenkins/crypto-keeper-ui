"use es6";

import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import React from "react";
import { updateTransactionStores } from "../../actions/transactions";
import transactionsStore from "../../store/transactions";

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
    continue: { marginTop: 5, alignSelf: "flex-end" },
    paper: {
      maxWidth: 300,
      padding: theme.spacing(1),
      display: "flex",
      flexDirection: "column",
    },
  })
);

const deleteSavedData = async () => {
  localStorage.removeItem("transactions");
  await updateTransactionStores([], false);
};

const UploadButton = (props) => {
  const classes = useStyles();
  const rootEl = React.useRef(null);

  const [popupOpen, setPopupOpen] = React.useState(false);

  const saveData = async () => {
    setPopupOpen(false);
    localStorage.setItem(
      "ck-saved-transactions",
      JSON.stringify(transactionsStore.getRawState().transactions)
    );
    await updateTransactionStores(
      transactionsStore.getRawState().transactions,
      true
    );
  };

  const transactionStoreState = transactionsStore.useState(
    (transactionsStore) => ({
      hasUploadedTransactions: !!transactionsStore.transactions.length,
      uploadedFromStorage: transactionsStore.fromStorage,
    })
  );

  return (
    <div className={classes.root} ref={rootEl}>
      {transactionStoreState.uploadedFromStorage ? (
        <>
          <Button
            component="span"
            variant="text"
            color="primary"
            id="deleteButton"
            className={classes.button}
            onClick={deleteSavedData}
          >
            <SaveIcon />
            {!props.mobile && (
              <span style={{ marginLeft: 5 }}>Delete Saved Data</span>
            )}
          </Button>
        </>
      ) : (
        <>
          <Button
            component="span"
            variant="text"
            color="primary"
            id="uploadButton"
            className={classes.button}
            onClick={() => setPopupOpen(!popupOpen)}
            disabled={!transactionStoreState.hasUploadedTransactions}
          >
            <SaveIcon />
            {!props.mobile && (
              <span style={{ marginLeft: 5 }}>Save Transaction Data</span>
            )}
          </Button>
          {rootEl?.current && (
            <Popper
              onClick={() => setPopupOpen(false)}
              placement="bottom-start"
              open={popupOpen}
              anchorEl={rootEl.current}
              transition
              onBlur={() => setPopupOpen(false)}
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper className={classes.paper}>
                    <div>
                      Continuing will save your uploaded data to your computer's
                      local storage. Do not do this if you are on a public
                      device. All data uploaded has no personal or identifiable
                      data. Transaction data is purely numbers, no account
                      information is saved.
                    </div>
                    <Button
                      color="secondary"
                      className={classes.continue}
                      variant="outlined"
                      onClick={saveData}
                    >
                      Continue
                    </Button>
                  </Paper>
                </Fade>
              )}
            </Popper>
          )}
        </>
      )}
    </div>
  );
};

export default UploadButton;
