import {rA, rS, Rc} from './instruction';

const pseudocode = `
S = rS[16]
rA[16-31] = rS[16-31]
rA[0-15] = (16)S
`;

export default {
  "mnemonic": "extsh",
  "fullName": "Extend Sign Half Word",
  "baseHex": "7C000734",
  "opcode": "011111",
  "parameters": [

    rA,
    rS
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 922,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    16,
    20
  ],
  "description": "The contents of the low-order 16 bits of rS are placed into the low-order 16 bits of rA[16-31]. Bit\n48 of rS is placed into the remaining bits of rA."
}