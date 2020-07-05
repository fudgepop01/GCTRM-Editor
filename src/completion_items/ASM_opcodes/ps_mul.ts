import {frD, frA, frC, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "ps_mul",
  "fullName": "Paired Single Multiply",
  "baseHex": "10000032",
  "opcode": "000100",
  "parameters": [

    frD,
    frA,
    frC
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 25,
    bits: [
      26,
      30
    ]
  },
  "reserved": [
    [
      16,
      20
    ]
  ],
  "description": "ps_mul. frD,frA,frC (Rc = 1)\n    if HID2[PSE] = 0 then invoke the illegal instruction error handler\n    frD(ps0) ¬ frA(ps0) * frC(ps0)\n    frD(ps1) ¬ frA(ps1) * frC(ps1)\nThe floating-point operand in register frA(ps0) is multiplied by the floating-point operand\nin register frC(ps0). If the most-significant bit of the resultant significand is not a one, the\nresult is normalized. The result is rounded to single-precision under control of the\nfloating-point rounding control field RN of the FPSCR and placed into frD(ps0).\nThe floating-point operand in register frA(ps1) is multiplied by the floating-point operand\nin register frC(ps1). If the most-significant bit of the resultant significand is not a one, the\nresult is normalized. The result is rounded to single-precision under control of the\nfloating-point rounding control field RN of the FPSCR and placed into frD(ps1).\nFloating-point multiplication is based on exponent addition and multiplication of the\nsignificands.\nFPSCR[FPRF] is set to the class and sign of the ps0 result, except for invalid operation\nexceptions when FPSCR[VE] = 1."
}