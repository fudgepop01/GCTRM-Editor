import {frD, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "ps_neg",
  "fullName": "Paired Single Negate",
  "baseHex": "10000050",
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
    value: 40,
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
  "description": "ps_neg. frD,frB (Rc = 1)\n    If HID2[PSE] = 0 then invoke the illegal instruction error handler\n    frD(ps0) ¬ Ø(frB(ps0)[0] || frB(ps0)[1-31] )\n    frD(ps1) ¬ Ø(frB(ps1)[0] || frB(ps1)[1-31] )\nThe contents of register frB(ps0) with bit 0 inverted are placed into frD(ps0).\nThe contents of register frB(ps1) with bit 0 inverted are placed into frD(ps1).\nNote that the ps_neg instruction treats NaNs just like any other kind of value. That is, the\nsign bit of a NaN may be altered by ps_neg. This instruction does not alter the FPSCR."
}