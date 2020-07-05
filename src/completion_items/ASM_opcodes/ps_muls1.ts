import {frD, frA, frC, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "ps_muls1",
  "fullName": "Paired Single Multiply Scalar low(x’1000 001A’)",
  "baseHex": "1000001A",
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
    value: 13,
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
  "description": "ps_muls1. frD,frA,frC (Rc = 1)\n    if HID2[PSE] = 0 then invoke the illegal instruction error handler\n    frD(ps0) ¬ frA(ps0) * frC(ps1)\n    frD(ps1) ¬ frA(ps1) * frC(ps1)\nThe floating-point operand in register frA(ps0) is multiplied by the floating-point operand\nin register frC(ps1). If the most-significant bit of the resultant significand is not a one, the\nresult is normalized. The result is rounded to single-precision under control of the\nfloating-point rounding control field RN of the FPSCR and are placed into frD(ps0).\nThe floating-point operand in register frA(ps1) is multiplied by the floating-point operand\nin register frC(ps1). If the most-significant bit of the resultant significand is not a one, the\nresult is normalized. The result is rounded to single-precision under control of the\nfloating-point rounding control field RN of the FPSCR and are placed into frD(ps1).\nFPSCR[FPRF] is set to the class and sign of the ps0 result, except for invalid operation\nexceptions when FPSCR[VE] = 1."
}