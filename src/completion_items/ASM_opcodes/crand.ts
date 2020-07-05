import {crbD, crbA, crbB} from './instruction';

const pseudocode = `
CR[crbD] = CR[crbA] & CR[crbB]
`;

export default {
  "mnemonic": "crand",
  "fullName": "Condition Register AND",
  "baseHex": "4C000202",
  "opcode": "010011",
  "parameters": [

    crbD,
    crbA,
    crbB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 257,
    bits: [
      21,
      30
    ]
  },
  "reserved": 31,
  "description": "The bit in the condition register specified by crbA is ANDed with the bit in the condition register\nspecified by crbB. The result is placed into the condition register bit specified by crbD."
}