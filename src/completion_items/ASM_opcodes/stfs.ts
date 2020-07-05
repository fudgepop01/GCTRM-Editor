import {frS, rA, d} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "stfs",
  "fullName": "Store Floating-Point Single",
  "baseHex": "D0000000",
  "opcode": "110100",
  "parameters": [

    frS,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "EA is the sum (rA|0) + d.\nThe contents of register frS are converted to single-precision and stored into the word in\nmemory addressed by EA. For a discussion on floating-point store conversions, see\nSection D.7, “Floating-Point Store Instructions.”"
}