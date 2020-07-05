import {rA, rS, rB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "xor",
  "fullName": "XOR",
  "baseHex": "7C000278",
  "opcode": "011111",
  "parameters": [

    rA,
    rS,
    rB
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 316,
    bits: [
      21,
      30
    ]
  },
  "reserved": null,
  "description": "xor. rA,rS,rB (Rc = 1)\n    rA ¬ (rS) Å (rB)\nThe contents of rS are XORed with the contents of rB and the result is placed into rA."
}