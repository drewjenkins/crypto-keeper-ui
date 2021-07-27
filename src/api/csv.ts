import Papa from "papaparse";
import { RawTransaction } from "../../types";

export const uploadCSV = (file: File): Promise<Array<RawTransaction>> =>
  new Promise((res) => {
    var reader = new FileReader();
    reader.onload = function () {
      Papa.parse(reader.result, {
        complete: (results) => res(results.data),
        header: true,
      });
    };

    reader.readAsText(file);
  });
