export default function countPresent(num) {
  let result = Array.from(num.toString()).reduce((acc, current) => {
    const repeat = current.repeat(Number(current));
    if (acc[current]) acc[current] = acc[current] + repeat;
    else acc[current] = repeat;
    return acc;
  }, {});

  return result;
}
