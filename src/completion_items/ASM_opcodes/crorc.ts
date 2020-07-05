import {crbD, crbA, crbB} from './instruction';

const pseudocode = `
CR[crbD] = CR[crbA] | ¬ CR[crbB]
`;

export default {
  "mnemonic": "crorc",
  "fullName": "Condition Register OR with Complement",
  "baseHex": "4C000342",
  "opcode": "010011",
  "parameters": [

    crbD,
    crbA,
    crbB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 417,
    bits: [
      21,
      30
    ]
  },
  "reserved": 31,
  "description": "The bit in the condition register specified by crbA is ORed with the complement of the condition\nregister bit specified by crbB and the result is placed into the condition register bit specified by crbD."
}