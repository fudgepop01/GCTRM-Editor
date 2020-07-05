import {crbA, crbB} from './instruction';
import { crbD } from './instruction';

const pseudocode = `
CR[crbD] = CR[crbA] ⊕ CR[crbB]
`;

export default {
  "mnemonic": "crxor",
  "fullName": "Condition Register XOR",
  "baseHex": "4C000182",
  "opcode": "010011",
  "parameters": [

    crbD,
    crbA,
    crbB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 193,
    bits: [
      21,
      30
    ]
  },
  "reserved": 31,
  "description": "The bit in the condition register specified by crbA is XORed with the bit in the condition register\nspecified by crbB and the result is placed into the condition register specified by crbD.",
  "simple": [{
    name: "crclr",
    isSimple(values: number[]) { return values[0] === values[1] && values[1] === values[3] },
    parameters: [ crbD ]
  }]
}