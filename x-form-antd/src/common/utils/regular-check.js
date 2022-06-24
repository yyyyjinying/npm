const isNumber = (value) => {
  if (!value) return false;
  const str = String(value);
  // return /^[0-9] || ([1-9]\.?[0-9]) || ([0]\..[0-9])$/.test(str);
  return /^([0] || ([0]\.?[0-9]+ || [1-9]+))$/.test(str);
  // return /^([0]\.?[0-9]+)$/.test(str);
};
console.log(isNumber('0.121'));
// export { isNumber };
