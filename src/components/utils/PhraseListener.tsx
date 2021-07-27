"use es6";

import React from "react";

const PhraseListener = (props) => {
  const [keys, _setKeys] = React.useState("");
  const keysRef = React.useRef(keys);
  const setKeys = (data) => {
    keysRef.current = data;
    _setKeys(data);
  };
  const onMatchRef = React.useRef(props.onMatch);
  const onMatch = () => {
    onMatchRef.current();
  };

  let timeout;

  const handleKeyDown = (e: KeyboardEvent) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setKeys("");
    }, 1000);

    if (`${keysRef.current}${e.key}`.includes(props.phrase)) {
      onMatch();
      setKeys("");
      return;
    }

    setKeys(`${keysRef.current}${e.key}`);
  };

  const handleKeyUp = (e: KeyboardEvent) => {};

  React.useEffect(() => {
    document.addEventListener("keypress", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
  }, []);

  return <span />;
};

export default PhraseListener;
