"use es6";

import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import LanguageIcon from "@material-ui/icons/Language";
import React from "react";
import { updatePreferredCurrency } from "../../actions/exchangeRates";
import tickerStore from "../../store/ticker";
import UploadButton from "./UploadButton";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex: 0 0 auto;
  flex-wrap: wrap;

  .currencyButton {
    margin: 8px;
  }

  .currencyMenuItem {
    width: 150px;
  }

  .buttonHolder {
    display: flex;
    justify-content: flex-end;
  }

  .lastUpdated {
    margin-left: 15px;
    margin-top: 15px;
  }
`;

const CurrencyButton = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (e) => {
    updatePreferredCurrency(e.target.innerText.replace(/[^a-z]/, "").trim());
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        component="span"
        variant="text"
        color="primary"
        aria-controls="currency-selection-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="currencyButton"
        id="currencySelectionButton"
      >
        <LanguageIcon />
        {window.innerWidth > 600 && "Preferred Currency"}
      </Button>
      <Menu
        id="currency-selection-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="menuContainer"
        style={{ top: 50 }}
      >
        <MenuItem
          className="currencyMenuItem"
          id="currencyUSD"
          onClick={(e) => handleMenuItemClick(e)}
        >
          $ USD
        </MenuItem>
        <MenuItem
          className="currencyMenuItem"
          id="currencyGBP"
          onClick={(e) => handleMenuItemClick(e)}
        >
          £ GBP
        </MenuItem>
        <MenuItem
          className="currencyMenuItem"
          id="currencyEUR"
          onClick={(e) => handleMenuItemClick(e)}
        >
          € EUR
        </MenuItem>
      </Menu>
    </div>
  );
};
const Header = () => {
  const lastUpdated = tickerStore.useState((s) => s.lastUpdated);

  return (
    <HeaderContainer>
      <div className="buttonHolder">
        <CurrencyButton />
        <UploadButton mobile={window.innerWidth <= 800} />
      </div>
    </HeaderContainer>
  );
};

export default Header;
