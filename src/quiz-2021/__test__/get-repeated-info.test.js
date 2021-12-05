import cases from "jest-in-case";
import getRepeatedInfoDefault from "../get-repeated-info";
import { getRepeatedInfo } from "../get-repeated-info";

const fn = getRepeatedInfoDefault || getRepeatedInfo;

cases(
  "valid strings",
  ([input, result]) => {
    expect(fn(input)).toEqual(result);
  },
  [
    [596, { 5: "5".repeat(5), 9: "9".repeat(9), 6: "6".repeat(6) }],
    [5956, { 5: "5".repeat(10), 9: "9".repeat(9), 6: "6".repeat(6) }],
    [59565, { 5: "5".repeat(15), 9: "9".repeat(9), 6: "6".repeat(6) }],
    [5555, { 5: "5".repeat(4 * 5) }],
    [
      123456789,
      Array.from({ length: 9 }, (_, i) => i + 1).reduce((acc, i) => {
        acc[i] = i.toString().repeat(i);
        return acc;
      }, {}),
    ],
  ]
);
