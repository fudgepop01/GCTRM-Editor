import {frS, rA, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "stfsux",
  "fullName": "Store Floating-Point Single with Update Indexed",
  "baseHex": "7C00056E",
  "opcode": "011111",
  "parameters": [

    frS,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 659,
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
  "description": "EA is the sum (rA) + (rB).\nThe contents of frS are converted to single-precision and stored into the word in memory\naddressed by EA. For a discussion on floating-point store conversions, see Section D.7,\n“Floating-Point Store Instructions,” in The Programming Environments Manual.\nEA is placed into rA.\nIf rA = 0, the instruction form is invalid."
}