import {crbD, crbA, crbB} from './instruction';

const pseudocode = `
CR[crbD] = CR[crbA] & ¬ CR[crbB]
`;

export default {
  "mnemonic": "crandc",
  "fullName": "Condition Register AND with Complement",
  "baseHex": "4C000102",
  "opcode": "010011",
  "parameters": [

    crbD,
    crbA,
    crbB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 129,
    bits: [
      21,
      30
    ]
  },
  "reserved": 31,
  "description": "The bit in the condition register specified by crbA is ANDed with the complement of the bit in the\ncondition register specified by crbB and the result is placed into the condition register bit specified\nby crbD."
}