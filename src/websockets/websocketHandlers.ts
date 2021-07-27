import { recalculate } from "../actions/ticker";

const handleEvent = (ev) => {
  const { data, event } = JSON.parse(ev.data);
  if (data.error) {
    return;
  }

  switch (event) {
    case "updateTicker": {
      recalculate();
    }
  }
};

export default handleEvent;
