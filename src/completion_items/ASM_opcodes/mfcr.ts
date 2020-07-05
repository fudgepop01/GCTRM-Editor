import {rD} from './instruction';

const pseudocode = `
rD = CR
`;

export default {
  "mnemonic": "mfcr",
  "fullName": "Move from Condition Register",
  "baseHex": "7C000026",
  "opcode": "011111",
  "parameters": [

    rD
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 19,
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
    ],
    31
  ],
  "description": "The contents of the condition register (CR) are placed into rD."
}