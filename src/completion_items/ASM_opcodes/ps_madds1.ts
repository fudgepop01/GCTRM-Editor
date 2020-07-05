import {frD, frA, frC, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "ps_madds1",
  "fullName": "Paired Single Multiply-Add Scalar low(x’1000 001E’)",
  "baseHex": "1000001E",
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
    value: 15,
    bits: [
      26,
      30
    ]
  },
  "reserved": null,
  "description": "ps_madds1. frD,frA,frC,frB (Rc = 1)\n    if HID2[PSE] = 0 then invoke the illegal instruction error handler\n    frD(ps0) ¬ [frA(ps0) * frC(ps1)] + frB(ps0)\n    frD(ps1) ¬ [frA(ps1) * frC(ps1)] + frB(ps1)\nThe floating-point operand in register frA(ps0) is multiplied by the floating-point operand in\nregister frC(ps1). The floating-point operand in register frB(ps0) is added to this intermediate\nproduct. If the most-significant bit of the resultant significand is not a one, the result is\nnormalized. The result is rounded to single-precision under control of the floating-point\nrounding control field RN of the FPSCR and placed into frD(ps0) .\nThe floating-point operand in register frA(ps1) is multiplied by the floating-point operand in\nregister frC(ps1). The floating-point operand in register frB(ps1) is added to this intermediate\nproduct. If the most-significant bit of the resultant significand is not a one, the result is\nnormalized. The result is rounded to single-precision under control of the floating-point\nrounding control field RN of the FPSCR and placed into frD(ps1) .\nFPSCR[FPRF] is set to the class and sign of the ps0 result, except for invalid operation\nexceptions when FPSCR[VE] = 1."
}