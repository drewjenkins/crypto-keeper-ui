export const fetchExchangeRates = async () => {
  const res = await fetch(`${SERVER}/api/exchange-rates`);
  return await res.json();
};
