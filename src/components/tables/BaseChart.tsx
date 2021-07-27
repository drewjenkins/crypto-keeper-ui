"use es6";

import styled from "@emotion/styled";
import { DataGrid } from "@material-ui/data-grid";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { TableField } from "../../../types/index";
import { TableNames } from "../../constants/index";
import useTableSort from "../../hooks/tableSort";
import NoRowsMessage from "./NoRowsMessage";
import FilterButton from "./utility/FilterButton";

type ChartProps = {
  id: TableNames;
  rows: Array<any>;
  columns: Array<TableField>;
  onPageChange?: (param: any) => void;
  loading?: boolean;
  rowCount?: number;
};

const Container = styled.div`
  width: 100%;
  position: relative;
  flex: 1 1 auto;
  max-height: calc(100% - 55px);
  display: flex;
  flex-direction: column;

  .MuiGrid-root {
    margin: 0;
  }

  .MuiDataGrid-columnSeparator {
    visibility: hidden;
    display: none;
  }

  .MuiDataGrid-colCell:first-of-type .MuiDataGrid-colCellTitle {
    margin-right: ${(props: { filtered: boolean }) =>
      props.filtered ? "84px" : "90px"};
  }

  .MuiDataGrid-colCellTitleContainer {
    justify-content: flex-end;
  }

  .MuiDataGrid-root {
    border-right: none;
    border-left: none;
    border-bottom: none;
  }

  .MuiDataGrid-colCell:focus {
    outline: transparent !important;
  }

  .MuiDataGrid-colCell {
    padding: 0 8px !important;
  }

  .MuiDataGrid-cell {
    padding: 0px 8px !important;
  }

  .search {
    top: 8px;
    position: absolute;
    z-index: 9999;
    background-color: #fafafa;
  }
`;

const BaseChart = (props: ChartProps) => {
  const [sortModel, setSortModel] = useTableSort(props.id);
  const [filterSymbol, updateFilterSymbol] = React.useState("");

  return (
    <ErrorBoundary fallback={<div>...</div>}>
      <Container filtered={!!filterSymbol}>
        <DataGrid
          components={{
            NoRowsOverlay: () => <NoRowsMessage tableId={props.id} />,
            FilterPanel: () => <div></div>,
            ColumnFilteredIcon: () => <div />,
          }}
          disableSelectionOnClick={true}
          density={window.innerHeight <= 600 ? "compact" : undefined}
          rows={props.rows}
          rowsPerPageOptions={[]}
          disableColumnMenu={true}
          columnBuffer={5}
          pageSize={100}
          rowCount={props.rowCount}
          onPageChange={props.onPageChange}
          pagination={true}
          loading={!!props.loading}
          paginationMode={!!props.onPageChange ? "server" : undefined}
          // @ts-ignore
          columns={props.columns}
          // @ts-ignore
          sortModel={sortModel}
          // @ts-ignore
          onSortModelChange={setSortModel}
          filterModel={{
            items: [
              {
                columnField: "coin",
                operatorValue: "equals",
                value: filterSymbol,
              },
            ],
          }}
        />
        <FilterButton
          onChange={updateFilterSymbol}
          className="search"
          filter={filterSymbol}
        />
      </Container>
    </ErrorBoundary>
  );
};

export default BaseChart;
