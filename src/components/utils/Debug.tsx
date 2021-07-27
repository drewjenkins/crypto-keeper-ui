"use es6";

import styled from "@emotion/styled";
import React from "react";
import miscStore from "../../store/misc";
import PhraseListener from "./PhraseListener";

const DebuggerStyle = styled.div`
  position: fixed;
  left: 10px;
  bottom: 10px;
`;

const DataRow = styled.div`
  display: flex;

  .label {
    font-weight: 500;
    margin-right: 5px;
  }
`;

const Debugger = (props) => {
  const data = miscStore.useState((s) => ({ ...s }));

  return (
    <DebuggerStyle>
      {Object.keys(data).map((s) => (
        <DataRow>
          <div className="label">{s}:</div>
          <div>{data[s]}</div>
        </DataRow>
      ))}
    </DebuggerStyle>
  );
};

/** Bullshit below **/
const Debug = (props) => {
  const [visible, _toggleVisible] = React.useState(false);
  const visibleRef = React.useRef(visible);
  const toggleVisible = (data) => {
    visibleRef.current = data;
    _toggleVisible(data);
  };

  return (
    <>
      <PhraseListener
        phrase="ckdebug"
        onMatch={() => toggleVisible(!visibleRef.current)}
      ></PhraseListener>
      {visible && <Debugger />}
    </>
  );
};
export default Debug;
