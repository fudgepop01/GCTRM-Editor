import {rA, rS, rB, Rc} from './instruction';

const pseudocode = `
rA = (rS) | (rB)
`;

export default {
  "mnemonic": "or",
  "fullName": "OR",
  "baseHex": "7C000378",
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
    value: 444,
    bits: [
      21,
      30
    ]
  },
  "reserved": null,
  "description": "or. rA,rS,rB (Rc = 1)\n    rA ¬ (rS) | (rB)\nThe contents of rS are ORed with the contents of rB and the result is placed into rA.\nThe example under simplified mnemonic mr demonstrates the use of the or instruction to\nmove register contents.",
  "simple": [{
    name: "mr",
    isSimple(values: number[]) { return values[1] === values[2] },
    "equivalent": "or rA, rS, rS",
    parameters: [rA, rS]
  }]
}