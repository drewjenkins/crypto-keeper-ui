import { Store } from "pullstate";
import { Totals } from "../../types";

const blankTotals: Totals = {
  day: 0,
  dayPercent: 0,
  overall: 0,
  overallPercent: 0,
  portfolioValue: 0,
  overallCostBasis: 0,
};

const Totals = new Store({ totals: { ...blankTotals } });

export default Totals;
