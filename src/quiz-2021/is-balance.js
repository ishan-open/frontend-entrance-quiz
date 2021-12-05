export default function isValidString(str) {
  const counts = { a: 0, p: 0, c: 0 };

  for (let char of str) {
    if (char === "(") counts.p++;
    else if (char === ")") {
      if (counts.p <= 0) return false;
      counts.p--;
    }

    if (char === "{") counts.c++;
    else if (char === "}") {
      if (counts.c <= 0) return false;
      counts.c--;
    }

    if (char === "[") counts.a++;
    else if (char === "]") {
      if (counts.a <= 0) return false;
      counts.a--;
    }
  }

  if (counts.a !== 0 || counts.p !== 0 || counts.c !== 0) return false;

  return true;
}
