import styled from "@emotion/styled";
import { Tab, Tabs } from "@material-ui/core";
import React from "react";
import { Link, Route, Switch, useHistory, withRouter } from "react-router-dom";
import totalsStore from "../store/totals";
import CoinDetail from "./detail/CoinDetail";
import MarketPrices from "./tables/MarketPrices";
import Positions from "./tables/Positions";
import TransactionLog from "./tables/TransactionLog";
import Totals from "./totals/Totals";

const StyledTab = styled.div`
  ${(props: any) => !props.showTotals && "visibility: hidden;"};
`;

const Routes = (props) => {
  const history = useHistory();

  React.useEffect(() => {
    history.push(`/${window.location.search}`);
  }, []);

  const showTotals = totalsStore.useState((s) => !!s.totals.portfolioValue);

  return (
    <Route
      path="/"
      render={({ location }) => (
        <>
          {showTotals && <Totals />}
          <Tabs value={location.pathname}>
            <Tab
              label="Market Prices"
              component={Link}
              value="/"
              to={{
                pathname: "/",
                search: props.location.search,
              }}
            />

            <Tab
              disabled={!showTotals}
              label="Positions"
              component={Link}
              value="/positions"
              to={{
                pathname: "/positions",
                search: props.location.search,
              }}
            />

            <Tab
              disabled={!showTotals}
              label="Transaction Log"
              component={Link}
              value="/transaction-log"
              to={{
                pathname: "/transaction-log",
                search: props.location.search,
              }}
            />
          </Tabs>

          <Switch>
            <Route path="/positions" component={Positions} />
            <Route path="/transaction-log" component={TransactionLog} />
            <Route path="/:coin" component={CoinDetail} />
            <Route path="/" component={MarketPrices} />
          </Switch>
        </>
      )}
    />
  );
};

export default withRouter(Routes);
