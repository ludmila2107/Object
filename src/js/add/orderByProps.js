export default function orderByProps(obj, entries) {
  const arr = [];
  for (const key in obj) {
    if (!entries.includes(key)) {
      arr.push(key);
    }
  }

  entries.push(...arr.sort());

  return entries.reduce((res, cur) => {
    res.push({ key: cur, value: obj[cur] });
    return res;
  }, []);
}
