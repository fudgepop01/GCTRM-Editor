import {frS, rA, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "stfdx",
  "fullName": "Store Floating-Point Double Indexed",
  "baseHex": "7C0005AE",
  "opcode": "011111",
  "parameters": [

    frS,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 727,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    [
      31
    ]
  ],
  "description": "EA is the sum (rA|0) + rB.\nThe contents of register frS are stored into the double word in memory addressed by EA."
}