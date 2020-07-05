import {crbD, crbA, crbB} from './instruction';

const pseudocode = `
CR[crbD] = ¬ (CR[crbA] | CR[crbB])
`;

export default {
  "mnemonic": "crnor",
  "fullName": "Condition Register NOR",
  "baseHex": "4C000042",
  "opcode": "010011",
  "parameters": [

    crbD,
    crbA,
    crbB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 33,
    bits: [
      21,
      30
    ]
  },
  "reserved": 31,
  "description": "The bit in the condition register specified by crbA is ORed with the bit in the condition register\nspecified by crbB and the complemented result is placed into the condition register bit specified by\ncrbD.",
  "simple": [{
    name: "crnot",
    isSimple(values: number[]) { return values[1] === values[2] },
    parameters: [ crbD, crbA ]
  }]
}