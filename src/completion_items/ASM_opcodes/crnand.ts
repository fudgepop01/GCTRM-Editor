import {crbD, crbA, crbB} from './instruction';

const pseudocode = `
CR[crbD] = ¬ (CR[crbA] & CR[crbB])
`;

export default {
  "mnemonic": "crnand",
  "fullName": "Condition Register NAND",
  "baseHex": "4C0001C2",
  "opcode": "010011",
  "parameters": [

    crbD,
    crbA,
    crbB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 225,
    bits: [
      21,
      30
    ]
  },
  "reserved": 31,
  "description": "The bit in the condition register specified by crbA is ANDed with the bit in the condition register\nspecified by crbB and the complemented result is placed into the condition register bit specified by\ncrbD."
}