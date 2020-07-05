import {frD, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "frsp",
  "fullName": "Floating Round to Single",
  "baseHex": "FC000018",
  "opcode": "111111",
  "parameters": [

    frD,
    frB
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 12,
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
  "description": "If HID2[PSE] = 0 then the floating-point operand in register frB is rounded to\nsingle-precision using the rounding mode specified by FPSCR[RN] and placed into frD.\nIf HID2[PSE] = 1 then the source operand in register frB is rounded to single-precision using\nthe rounding mode specified by FPSCR[RN] and placed into frD(ps0). The value in frD(ps1)\nis undefined.\nThe rounding is described fully in Section D.4.1, “Floating-Point Round to Single-Precision\nModel,” in The Programming Environments Manual.\nFPSCR[FPRF] is set to the class and sign of the result, except for invalid operation exceptions\nwhen FPSCR[VE] = 1."
}