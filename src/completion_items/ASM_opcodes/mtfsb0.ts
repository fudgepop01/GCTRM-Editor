import {crbD, Rc} from './instruction';

const pseudocode = `
FPSRC(crbD) = 0
`;

export default {
  "mnemonic": "mtfsb0",
  "fullName": "Move to FPSCR Bit 0",
  "baseHex": "FC00008C",
  "opcode": "111111",
  "parameters": [

    crbD
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 70,
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
  "description": "mtfsb0. crbD (Rc = 1)\n    FPSRC(crbD)¬ 0\nBit crbD of the FPSCR is cleared."
}