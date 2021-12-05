export default function operators(ops) {
  let result = [];
  ops.split(" ").forEach(item => {
    if (Number(item) == item) result.push(Number(item));
    else if (item === "D") result.push(result[result.length - 1] * 2);
    else if (item === "R") result.pop();
    else {
      result.push(result[result.length - 1] + result[result.length - 2]);
    }
  });
  result = result.reduce((acc, cur) => acc + cur, 0);
  return result;
}
