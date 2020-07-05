import {frS, rA, d} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "stfd",
  "fullName": "Store Floating-Point Double",
  "baseHex": "D8000000",
  "opcode": "110110",
  "parameters": [

    frS,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": [
    [
      31
    ]
  ],
  "description": "The contents of register frS are stored into the double word in memory addressed by EA."
}