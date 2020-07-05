import {frD, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "ps_rsqrte",
  "fullName": "Paired Single Reciprocal Square Root Estimate",
  "baseHex": "10000034",
  "opcode": "000100",
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
      15
    ]
  ],
  "description": "ps_rsqrte. frD,frB (Rc = 1)\n    ---\nA single-precision estimate of the reciprocal of the square root of the floating-point operand\nin register frB(ps0) is placed into register frD(ps0). A single-precision estimate of the\nreciprocal of the square root of the floating-point operand in register frB(ps1) is placed into\nregister frD(ps1).These estimates placed into register frD(ps0) and frD(ps1) are correct to a\nprecision of one part in 4096 of the reciprocal of the square root of frB(ps0) and frB(ps1),\nrespectively."
}