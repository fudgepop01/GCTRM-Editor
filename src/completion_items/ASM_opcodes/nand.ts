import {rA, rS, rB, Rc} from './instruction';

const pseudocode = `
rA = ¬ ((rS) & (rB))
`;

export default {
  "mnemonic": "nand",
  "fullName": "NAND",
  "baseHex": "7C0003B8",
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
    value: 476,
    bits: [
      21,
      30
    ]
  },
  "reserved": null,
  "description": "nand. rA,rS,rB (Rc = 1)\n    rA ¬ ¬ ((rS) & (rB))\nThe contents of rS are ANDed with the contents of rB and the complemented result is placed\ninto rA.\nnand with rS = rB can be used to obtain the one's complement."
}