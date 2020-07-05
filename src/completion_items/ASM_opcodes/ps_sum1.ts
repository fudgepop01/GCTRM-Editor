import {frD, frA, frC, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "ps_sum1",
  "fullName": "Paired Single vector SUM low(x’1000 0016’)",
  "baseHex": "10000016",
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
    value: 11,
    bits: [
      26,
      30
    ]
  },
  "reserved": null,
  "description": "ps_sum1. frD,frA,frC,frB (Rc = 1)\n    if HID2[PSE] = 0 then Goto illegal instruction error handler\n    frD(ps0) ¬ frC(ps0)\n    frD(ps1) ¬ frA(ps0) + frB(ps1)\nThe floating-point operand in register frC(ps0) is placed into frD(ps0).\nThe floating-point operand in register frA(ps0) is added to the floating-point operand from\nregister frB(ps1). If the most-significant bit of the resultant significand is not a one, the\nresult is normalized. The result is rounded to single-precision under control of the\nfloating-point rounding control field RN of the FPSCR and placed into frD(ps1).\nFPSCR[FPRF] is set to the class and sign of the ps1 result, except for invalid operation\nexceptions when FPSCR[VE] = 1."
}