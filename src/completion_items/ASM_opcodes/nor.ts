import {rA, rS, rB, Rc} from './instruction';

const pseudocode = `
rA = ¬ ((rS) | (rB))
`;

export default {
  "mnemonic": "nor",
  "fullName": "NOR",
  "baseHex": "7C0000F8",
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
    value: 124,
    bits: [
      21,
      30
    ]
  },
  "reserved": null,
  "description": "nor. rA,rS,rB (Rc = 1)\n    rA ¬ ¬ ((rS) | (rB))\nThe contents of rS are ORed with the contents of rB and the complemented result is placed\ninto rA.\nnor with rS = rB can be used to obtain the one’s complement.",
  "simple": [{
    name: "not",
    isSimple(values: number[]) { return values[1] === values[2] },
    "equivalent": "nor rA, rS, rS",
    parameters: [ rA, rS ]
  }]
}