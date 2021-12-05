import cases from "jest-in-case";
import removerRepetitiveDefault from "../remove-repetitive";
import { removerRepetitive } from "../remove-repetitive";

const fn = removerRepetitiveDefault || removerRepetitive;

cases(
  "valid strings",
  ([input, result]) => {
    expect(fn(input)).toBe(result);
  },
  [
    ["aaaasaaa", "asa"],
    ["bababa", "bababa"],
    ["abcdef", "abcdef"],
    ["abc", "abc"],
  ]
);
