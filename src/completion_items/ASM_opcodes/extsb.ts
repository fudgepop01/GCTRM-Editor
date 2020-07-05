import {rS, rA, Rc} from './instruction';

const pseudocode = `
S = rS[24]
rA[24-31] = rS[24-31]
rA[0-23] = (24)S
`;

export default {
  "mnemonic": "extsb",
  "fullName": "Extend Sign Byte",
  "baseHex": "7C000774",
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
    value: 954,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    16,
    20
  ],
  "description": "The contents of the low-order eight bits of rS are placed into the low-order eight bits of rA.\nBit 24 of rS is placed into the remaining bits of rA."
}