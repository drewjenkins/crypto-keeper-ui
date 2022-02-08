'use es6';

import React from 'react';
import './wordleScript'



const Wordle = () => {
  React.useEffect(() => {
    (window as any).wordle = (window as any).wordle || {};
    (window as any).wordle.hash = 'e65ce0a5';
    // @ts-ignore
    try{document.querySelector('#hubspot-messages-iframe-container').style.visibility = 'hidden'}catch(e){}
  }, []);

  return (
    // @ts-ignore
    <game-app></game-app>
  )
}

export default Wordle;
