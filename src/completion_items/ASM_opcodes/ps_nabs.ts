import {frD, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "ps_nabs",
  "fullName": "Paired Single Negative Absolute Value",
  "baseHex": "10000110",
  "opcode": "000100",
  "parameters": [

    frD,
    frB
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 136,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    [
      11,
      15
    ]
  ],
  "description": "ps_nabs. frD,frB (Rc = 1)\n    If HID2[PSE] = 0 then invoke the illegal instruction error handler\n    frD(ps0) ¬ b’1’ || frB(ps0)[1-31]\n    frD(ps1) ¬ b’1’ || frB(ps1)[1-31]\nThe contents of register frB(ps0) with bit 0 set are placed into frD(ps0).\nThe contents of register frB(ps1) with bit 0 set are placed into frD(ps1).\nNOTE: The ps_nabs instruction treats NaNs just like any other kind of value. That is, the sign bit\nof a NaN may be altered by ps_nabs. This instruction does not alter the FPSCR."
}