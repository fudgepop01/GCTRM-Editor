import {frD, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "frsqrte",
  "fullName": "Floating Reciprocal Square Root Estimate",
  "baseHex": "FC000034",
  "opcode": "111111",
  "parameters": [

    frD,
    frB
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 26,
    bits: [
      26,
      30
    ]
  },
  "reserved": [
    [
      11,
      15
    ],
    [
      21,
      25
    ]
  ],
  "description": "A double-precision estimate of the reciprocal of the square root of the floating-point\noperand in register frB is placed into register frD. The estimate placed into register frD is\ncorrect to a precision of one part in 4096 of the reciprocal of the square root of frB.\n(gekko_user_manual p.419)"
}