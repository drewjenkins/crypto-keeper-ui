import miscStore from "../store/misc";

export const updateSocketConnected = (connected) => {
  miscStore.update((store) => {
    store.socketConnected = connected;
  });
};

export const updateDebugInfo = (data: any) => {
  miscStore.update((store) => {
    Object.keys(data).forEach((d) => {
      store[d] = data[d];
    });
  });
};
