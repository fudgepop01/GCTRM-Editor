import {frS, rA, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "stfsx",
  "fullName": "Store Floating-Point Single Indexed",
  "baseHex": "7C00052E",
  "opcode": "011111",
  "parameters": [

    frS,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 663,
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
  "description": "MEM(EA, 4) ¬ SINGLE(frS)\nEA is the sum (rA|0) + (rB).\nThe contents of register frS are converted to single-precision and stored into the word in\nmemory addressed by EA. For a discussion on floating-point store conversions, see\nSection D.7, “Floating-Point Store Instructions,” in The Programming Environments Manual."
}