import {crfD} from './instruction';

const pseudocode = `
CR[4 * crfD [[?]] 4 * crfD + 3] = XER[0-3]
XER[0-3] = 0b0000
`;

export default {
  "mnemonic": "mcrxr",
  "fullName": "Move to Condition Register from XER",
  "baseHex": "7C000400",
  "opcode": "011111",
  "parameters": [

    crfD
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 512,
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
      11,
      15
    ],
    [
      16,
      20
    ],
    31
  ],
  "description": "The contents of XER[0–3] are copied into the condition register field designated by crfD. All\nother fields of the condition register remain unchanged. XER[0–3] is cleared."
}