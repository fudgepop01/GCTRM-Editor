import {crfD, crfS} from './instruction';

const pseudocode = `
CR[4 * crfD - 4 * crfD + 3] = CR[4 * crfS - 4 * crfS + 3]
`;

export default {
  "mnemonic": "mcrf",
  "fullName": "Move Condition Register Field",
  "baseHex": "4C000000",
  "opcode": "010011",
  "parameters": [

    crfD,
    crfS
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 0,
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
  "description": "The contents of condition register field crfS are copied into condition register field crfD. All\nother condition register fields remain unchanged."
}