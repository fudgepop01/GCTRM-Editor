import {rA, rS, rB, Rc} from './instruction';

const pseudocode = `
rA = (rS) | ¬ (rB)
`;

export default {
  "mnemonic": "orc",
  "fullName": "OR with Complement",
  "baseHex": "7C000338",
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
    value: 412,
    bits: [
      21,
      30
    ]
  },
  "reserved": null,
  "description": "orc. rA,rS,rB (Rc = 1)\n    rA ¬ (rS) | ¬ (rB)\nThe contents of rS are ORed with the complement of the contents of rB and the result is\nplaced into rA."
}