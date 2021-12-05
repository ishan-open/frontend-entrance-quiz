import cases from 'jest-in-case'
import isBalanceDefault from '../is-balance'
import { isBalance } from '../is-balance'

const fn = isBalanceDefault || isBalance

cases(
  'valid strings',
  ([input, result]) => {
    expect(fn(input)).toBe(result)
  },
  [
    ['(){}[]', true],
    ['({[]})', true],
    ['({[]}(', false],
    ['({[]}()', false],
    ['({[]}())', true],
  ],
)
