import wakeEvent from "wake-event";
import { updateSocketConnected } from "../actions/misc";
import handleEvent from "./websocketHandlers";

let connected = false;
const connect = () => {
  const url = new URL("/socket", SERVER);
  url.protocol = url.protocol.replace("http", "ws");
  const client = new WebSocket(url.href);
  client.onmessage = handleEvent;
  client.onopen = () => {
    updateSocketConnected(true);
    connected = true;
  };
  client.onclose = () => {
    updateSocketConnected(false);
    connected = false;
  };
};

setInterval(() => {
  if (!connected) connect();
}, 5000);

wakeEvent(() => {
  if (!connected) connect();
});

export default connect;
