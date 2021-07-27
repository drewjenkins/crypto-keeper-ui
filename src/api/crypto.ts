export const fetchTickerData = async () => {
  const res = await fetch(`${SERVER}/api/ticker`);
  return res.json();
};

export const fetchRowCount = async () => {
  const res = await fetch(`${SERVER}/api/crypto-count`);
  const data = await res.json();
  return data.count;
};
