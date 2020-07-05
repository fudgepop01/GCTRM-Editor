import {frS, rA, d} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "stfsu",
  "fullName": "Store Floating-Point Single with Update",
  "baseHex": "D4000000",
  "opcode": "110101",
  "parameters": [

    frS,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "The contents of frS are converted to single-precision and stored into the word in memory\naddressed by EA. For a discussion on floating-point store conversions, see Section D.7,\n“Floating-Point Store Instructions,” in The Programming Environments Manual.\nEA is placed into rA.\nIf rA = 0, the instruction form is invalid."
}