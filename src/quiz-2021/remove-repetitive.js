export default function removeRepetitive(str) {
  let result = Array.from(str).reduce((acc, curr) => {
    if (acc[acc.length - 1] !== curr) {
      acc += curr;
    }
    return acc;
  }, "");

  return result;
}

// OTHER SOLUTIONS
function removeRepetitiveAlternativeSolution(str) {
  let result = "";
  for (let char of str) {
    if (result[result.length - 1] !== char) {
      result += char;
    }
  }
  return result;
}

function removeRepetitiveAlternativeSolution2(str) {
  let result = "";
  for (let char of str) {
    if (result.charAt(result.length - 1) !== char) {
      result += char;
    }
  }
  return result;
}
