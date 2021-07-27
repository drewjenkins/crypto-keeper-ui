import React from "react";
import qs from "qs";
import { useHistory } from "react-router-dom";

const getSortModel = (history: any, prefix: string) => {
  const params = qs.parse(history.location.search.replace("?", ""));
  return params[prefix] ? [params[prefix]] : undefined;
};

const useTableSort = (prefix: string) => {
  const history = useHistory();

  const [sortModel, privateSetSortModel] = React.useState(
    getSortModel(history, prefix)
  );

  const setSortModel = (d) => {
    const model = d.sortModel[0];
    const params = qs.parse(history.location.search.replace("?", ""));
    params[prefix] = { ...model };

    history.push({
      search: `?${qs.stringify(params, { encodeValuesOnly: true })}`,
    });

    privateSetSortModel(d.sortModel);
  };

  return [sortModel, setSortModel];
};

export default useTableSort;
