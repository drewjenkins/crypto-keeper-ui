"use es6";

import styled from "@emotion/styled";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SnackbarProvider } from "notistack";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import { updateExchangeRates } from "../actions/exchangeRates";
import "../utils/monkeyPatches";
import initSentry from "../utils/sentry";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Router from "./Router";
import Debug from "./utils/Debug";
import Wordle from '../components/wordle/Wordle'

initSentry();

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .appContainer {
    flex: 1 1 auto;
    height: 100%;
    display: flex !important;
    flex-direction: column !important;

    .MuiGrid-root {
      margin: 0 !important;
    }
  }
`;

const App = () => {
  if(document.location.href.includes('wordle')) return <Wordle />;


  const [init, setInit] = React.useState(false);
  React.useEffect(() => {
    updateExchangeRates();
    setInit(true);
  }, []);

  if (!init) return null;

  return (
    <ErrorBoundary
      fallback={<div>Something went wrong, try reloading the page</div>}
    >
      <Debug />
      <SnackbarProvider maxSnack={3}>
        <AppStyle>
          <Header />
          <Container className="appContainer" maxWidth="lg">
            <CssBaseline />
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </Container>
          <Footer />
        </AppStyle>
      </SnackbarProvider>
    </ErrorBoundary>
  );
};

export default App;
