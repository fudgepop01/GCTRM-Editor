import {crfD, crfS} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "mcrfs",
  "fullName": "Move to Condition Register from FPSCR",
  "baseHex": "FC000080",
  "opcode": "111111",
  "parameters": [

    crfD,
    crfS
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 64,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    [
      9,
      10
    ],
    [
      14,
      15
    ],
    [
      16,
      20
    ],
    31
  ],
  "description": "The contents of FPSCR field crfS are copied to CR field crfD. All exception bits copied\n(except FEX and VX) are cleared in the FPSCR."
}