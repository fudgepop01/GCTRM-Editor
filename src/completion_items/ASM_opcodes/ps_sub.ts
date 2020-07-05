import {frD, frA, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "ps_sub",
  "fullName": "Paired Single Subtract",
  "baseHex": "10000028",
  "opcode": "000100",
  "parameters": [

    frD,
    frA,
    frB
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 20,
    bits: [
      26,
      30
    ]
  },
  "reserved": [
    [
      21,
      25
    ]
  ],
  "description": "ps_sub. frD,frA,frB (Rc = 1)\n    If HID2[PSE] = 0 then invoke the illegal instruction error handler\n    frD(ps0) ¬ frA(ps0) - frB(ps0)\n    frD(ps1) ¬ frA(ps1) - frB(ps1)\nThe floating-point operand in register frB(ps0) is subtracted from the floating-point\noperand in register frA(ps0). If the most-significant bit of the resultant significand is not a\none, the result is normalized. The result is rounded to single-precision under control of the\nfloating-point rounding control field RN of the FPSCR and placed into frD(ps0).\nThe floating-point operand in register frB(ps1) is subtracted from the floating-point\noperand in register frA(ps1). If the most-significant bit of the resultant significand is not a\none, the result is normalized. The result is rounded to single-precision under control of the\nfloating-point rounding control field RN of the FPSCR and placed into frD(ps1).\nFPSCR[FPRF] is set to the class and sign of the ps0 result, except for invalid operation\nexceptions when FPSCR[VE] = 1."
}