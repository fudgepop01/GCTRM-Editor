import {rA, rS, rB, Rc} from './instruction';

const pseudocode = `
rA = (rS) ≡ (rB)
`;

export default {
  "mnemonic": "eqv",
  "fullName": "Equivalent",
  "baseHex": "7C000238",
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
    value: 284,
    bits: [
      22,
      30
    ]
  },
  "reserved": null,
  "description": "The contents of rS are XORed with the contents of rB and the complemented result is placed into\nrA."
}