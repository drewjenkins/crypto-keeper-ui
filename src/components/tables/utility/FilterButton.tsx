"use es6";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

const FilterButton = (props) => {
  const [filter, setFilter] = React.useState(props.filter || "");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const togglePopover = (e) => {
    if (!anchorEl) {
      setTimeout(() => {
        document.getElementById("symbol-filter-input")?.focus();
      }, 10);
    }
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  const closePopover = () => {
    setAnchorEl(null);
  };

  const updateFilter = () => {
    props.onChange(filter.trim());
    closePopover();
  };

  const clearFilter = () => {
    setFilter("");
    props.onChange("");
    closePopover();
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      updateFilter();
      return;
    }
    if (e.keyCode === 27) {
      setFilter(props.filter);
      closePopover();
    }
  };

  const handleClickOutside = () => {
    setFilter(props.filter);
    closePopover();
  };

  return null;

  return (
    <div>
      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={!!anchorEl}
        anchorEl={anchorEl}
      >
        <ClickAwayListener onClickAway={handleClickOutside}>
          <div style={{ padding: 3 }}>
            <TextField
              id="symbol-filter-input"
              label="Symbol"
              value={filter}
              onKeyUp={handleKeyUp}
              style={{ width: 200 }}
              onChange={(e) => setFilter(e.target.value)}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              InputProps={{
                endAdornment: (
                  <span style={{ display: "flex" }}>
                    {!!filter && (
                      <IconButton size="small" onClick={clearFilter}>
                        <CloseIcon />
                      </IconButton>
                    )}
                    <IconButton size="small" onClick={updateFilter}>
                      <CheckIcon />
                    </IconButton>
                  </span>
                ),
              }}
            />
          </div>
        </ClickAwayListener>
      </Popover>
      <SearchIcon className={props.className} onClick={togglePopover} />
    </div>
  );
};

export default FilterButton;
