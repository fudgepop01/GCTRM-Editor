import {crbD, Rc} from './instruction';

const pseudocode = `
FPSRC(crbD) = 1
`;

export default {
  "mnemonic": "mtfsb1",
  "fullName": "Move to FPSCR Bit 1",
  "baseHex": "FC00004C",
  "opcode": "111111",
  "parameters": [

    crbD
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 38,
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
  "description": "mtfsb1. crbD (Rc = 1)\n    FPSRC(crbD)¬ 1\nBit crbD of the FPSCR is set."
}