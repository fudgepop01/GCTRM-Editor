import {frD, frB, Rc} from './instruction';

const pseudocode = `
if (HID2[PSE] == 0) {
  Goto illegial instruction error handler
}
frD(ps0) = b'0' || frB(ps0)[1-31]
frD(ps1) = b'0' || frB(ps1)[1-31]
`;

export default {
  "mnemonic": "ps_abs",
  "fullName": "Paired Single Absolute Value",
  "baseHex": "10000210",
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
    value: 264,
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
  "description": "ps_abs. frD,frB (Rc = 1)\n    If HID2[PSE] = 0 then invoke the illegal instruction error handler\n    frD(ps0) ¬ b’0’ || frB(ps0)[1-31]\n    frD(PS1) ¬ b’0’ || frB(ps1)[1-31]\nThe contents of frB(ps0) with bit 0 cleared are placed into frD(ps0).\nThe contents of frB(ps1) with bit 0 cleared are placed into frD(ps1).\nNote that the ps_abs instruction treats NaNs just like any other kind of value. That is, the\nsign bit of a NaN may be altered by ps_abs. This instruction does not alter the FPSCR."
}