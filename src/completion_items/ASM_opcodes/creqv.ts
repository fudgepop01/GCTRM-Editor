import {crbD, crbA, crbB} from './instruction';

const pseudocode = `
CR[crbD] = CR[crbA] ≡ CR[crbB]
`;

export default {
  "mnemonic": "creqv",
  "fullName": "Condition Register Equivalent",
  "baseHex": "4C000242",
  "opcode": "010011",
  "parameters": [

    crbD,
    crbA,
    crbB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 289,
    bits: [
      21,
      30
    ]
  },
  "reserved": 31,
  "description": "The bit in the condition register specified by crbA is XORed with the bit in the condition register\nspecified by crbB and the complemented result is placed into the condition register bit specified by\ncrbD.",
  "simple": [{
    "name": "crse",
    isSimple(values: number[]) { values[0] == values[1] && values[0] === values[2] },
    "parameters": [ crbD ]
  }]
}