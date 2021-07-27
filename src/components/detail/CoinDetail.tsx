"use es6";

import React from "react";
import { useParams } from "react-router-dom";

const CoinDetail = (props) => {
  const [match, setMatch] = React.useState(null);
  // @ts-ignore
  let { coin } = useParams();

  React.useEffect(() => {
    fetchCoin();
  }, []);

  const fetchCoin = async () => {
    const listRes = await fetch(`https://api.coingecko.com/api/v3/coins/list`);
    const list = await listRes.json();
    const matchingCoin = list.find((l) => [l.symbol, l.name].includes(coin));
    if (matchingCoin) {
      const coinRes = await fetch(
        `https://api.coingecko.com/api/v3/coins/${matchingCoin.id}?sparkline=true`
      );
      const coin = await coinRes.json();
      setMatch(coin);
    }
  };

  const getMarkup = () => {
    return {
      // @ts-ignore
      __html:
        match === null
          ? "loading"
          : match === undefined
          ? "no match"
          : match.description.en || "",
    };
  };

  return <div dangerouslySetInnerHTML={getMarkup()}></div>;
};
export default CoinDetail;
