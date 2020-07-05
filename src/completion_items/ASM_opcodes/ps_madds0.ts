import {frD, frA, frC, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "ps_madds0",
  "fullName": "Paired Single Multiply-Add Scalar high(x’1000 001C’)",
  "baseHex": "1000001C",
  "opcode": "000100",
  "parameters": [

    frD,
    frA,
    frC,
    frB
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 14,
    bits: [
      26,
      30
    ]
  },
  "reserved": null,
  "description": "ps_madds0. frD,frA,frC,frB (Rc = 1)\n    if HID2[PSE] = 0 then invoke the illegal instruction error handler\n    frD(ps0) ¬ [frA(ps0) * frC(ps0)] + frB(ps0)\n    frD(ps1) ¬ [frA(ps1) * frC(ps0)] + frB(ps1)\nThe floating-point operand in register frA(ps0) is multiplied by the floating-point operand\nin register frC(ps0). The floating-point operand in register frB(ps0) is added to this\nintermediate result, if the most-significant bit of the resultant significand is not a one, the\nresult is normalized. The result is rounded to single-precision under control of the\nfloating-point rounding control field RN of the FPSCR and is placed into frD(ps0).\nThe floating-point operand in register frA(ps1) is multiplied by the floating-point operand\nin register frC(ps0). The floating-point operand in register frB(ps1) is added to this\nintermediate result, if the most-significant bit of the resultant significand is not a one, the\nresult is normalized. The result is rounded to single-precision under control of the\nfloating-point rounding control field RN of the FPSCR and is placed into frD(ps1).\nFPSCR[FPRF] is set to the class and sign of the ps0 result, except for invalid operation\nexceptions when FPSCR[VE] = 1."
}