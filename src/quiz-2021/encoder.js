function operator(str) {
  let result = Array.from(
    str[str.length - 1] + str.slice(0, str.length - 1)
  ).map(item => {
    if (item === "z") return "a";
    return String.fromCharCode(item.charCodeAt(0) + 1);
  });

  return result.join("");
}

export default function encoder({ repeatCount, inputString }) {
  let result = Array.from({ length: repeatCount }).reduce(
    acc => operator(acc),
    inputString
  );
  return result;
}
