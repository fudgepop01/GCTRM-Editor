import {frD, Rc} from './instruction';

const pseudocode = `
frD[32-63] = FPSCR
`;

export default {
  "mnemonic": "mffs",
  "fullName": "Move from FPSCR",
  "baseHex": "FC00048E",
  "opcode": "111111",
  "parameters": [

    frD
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 583,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    [
      11,
      15
    ],
    [
      16,
      20
    ]
  ],
  "description": "mffs. frD (Rc = 1)\n    frD[32-63] ¬FPSCR\nThe contents of the floating-point status and control register (FPSCR) are placed into the\nlow-order bits of register frD. The high-order bits of register frD are undefined."
}