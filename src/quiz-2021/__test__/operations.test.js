import cases from 'jest-in-case'
import operationsDefault from '../operations'
import { operations } from '../operations'

const fn = operationsDefault || operations

cases(
  'valid strings',
  ([input, result]) => {
    expect(fn(input)).toBe(result)
  },
  [
    ['5 2 D + R', 11],
    ['5', 5],
    ['5 2', 7],
    ['0 2 D', 6],
    ['0 2 D +', 12],
    ['0 2 D + R', 6],
    ['-5 2', -3],
    ['-4', -4],
    ['-4 2 D', 2],
    ['-4 2 +', -4],
    ['-4 2 D +', 8],
    ['-4 2 D + R', 2],
  ],
)
