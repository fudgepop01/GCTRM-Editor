import {crbD, crbA, crbB} from './instruction';

const pseudocode = `
CR[crbD] = CR[crbA] | CR[crbB]
`;

export default {
  "mnemonic": "cror",
  "fullName": "Condition Register OR",
  "baseHex": "4C000382",
  "opcode": "010011",
  "parameters": [

    crbD,
    crbA,
    crbB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 449,
    bits: [
      21,
      30
    ]
  },
  "reserved": 31,
  "description": "The bit in the condition register specified by crbA is ORed with the bit in the condition register\nspecified by crbB. The result is placed into the condition register bit specified by crbD.",
  "simple": [{
    name: "crmove",
    isSimple(values: number[]) { return values[1] === values[2] },
    "equivalent": "cror crbD, crbA, crbA",
    parameters: [ crbD, crbA ]
  }]

}