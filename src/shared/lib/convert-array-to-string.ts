export const convertArrayToString = (arr: { name: string }[]) => {
  const res = [];
  for (const item of arr) {
    res.push(item.name);
  }

  return res.join(", ");
};
