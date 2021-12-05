import cases from 'jest-in-case'
import encoderDefault from '../encoder'
import { encoder } from '../encoder'

const fn = encoderDefault || encoder

cases(
  'valid strings',
  ([input, result]) => {
    expect(fn(input)).toBe(result)
  },
  [
    [{ repeatCount: 1, inputString: 'abz' }, 'abc'],
    [{ repeatCount: 2, inputString: 'abz' }, 'dbc'],
    [{ repeatCount: 5, inputString: 'abcd' }, 'ifgh'],
    [{ repeatCount: 1, inputString: 'zzzz' }, 'aaaa'],
    [{ repeatCount: 2, inputString: 'zzzz' }, 'bbbb'],
    [{ repeatCount: 3, inputString: 'zzzz' }, 'cccc'],
    // prettier-ignore
    [{ repeatCount: 3, inputString: "abcdefghijklmnpqrstuvwxyz" }, "abcdefghijklmnopqstuvwxyz"],
    // prettier-ignore
    [{ repeatCount: 3, inputString: "abcdefghijklmnopqstuvwxyz" }, "abcdefghijklmnopqrstvwxyz"],
    // prettier-ignore
    [{ repeatCount: 1000, inputString: "mynameisjavascript" }, "vmhmeodubfykzmyque"],
    [{ repeatCount: 1000, inputString: 'a' }, 'm'],
    [{ repeatCount: 1, inputString: 'a' }, 'b'],
    [{ repeatCount: 0, inputString: 'a' }, 'a'],
  ],
)
