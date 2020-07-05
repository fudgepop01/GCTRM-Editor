import {frD, frA, frC, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "ps_madd",
  "fullName": "Paired Single Multiply-Add",
  "baseHex": "1000003A",
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
    value: 29,
    bits: [
      26,
      30
    ]
  },
  "reserved": null,
  "description": "ps_madd. frD,frA,frC,frB (Rc = 1)\n    If HID2[PSE] = 0 then invoke the illegal instruction error handler\n    frD(ps0) ¬ [frA(ps0) * frC(ps0)] + frB(ps0)\n    frD(ps1) ¬ [frA(ps1) * frC(ps1)] + frB(ps1)\nThe floating-point operand in register frA(ps0) is multiplied by the floating-point operand in\nregister frC(ps0). The floating-point operand in register frB(ps0) is added to this intermediate\nproduct. If the most-significant bit of the resultant significand is not a one, the result is\nnormalized. The result is rounded to single-precision under control of the floating-point\nrounding control field RN of the FPSCR and placed into frD(ps0).\nThe floating-point operand in register frA(ps1) is multiplied by the floating-point operand in\nregister frC(ps1). The floating-point operand in register frB(ps1) is added to this intermediate\nproduct. If the most-significant bit of the resultant significand is not a one, the result is\nnormalized. The result is rounded to single-precision under control of the floating-point\nrounding control field RN of the FPSCR and placed into frD(ps1).\nFPSCR[FPRF] is set to the class and sign of the ps0 result, except for invalid operation\nexceptions when FPSCR[VE] = 1."
}