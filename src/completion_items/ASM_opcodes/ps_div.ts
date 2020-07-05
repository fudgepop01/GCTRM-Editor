import {frD, frA, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "ps_div",
  "fullName": "Paired Single Divide",
  "baseHex": "10000024",
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
    value: 18,
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
  "description": "ps_div. frD,frA,frB (Rc = 1)\n    If HID2[PSE] = 0 then invoke the illegal instruction error handler\n    frD(ps0) ¬ frA(ps0) ¸ frB(ps0)\n    frD(ps1) ¬ frA(ps1) ¸ frB(ps1)\nThe floating-point operand in register frA(ps0) is divided by the floating-point operand in\nregister frB(ps0). The remainder is not supplied as a result. If the most-significant bit of the\nresultant significand is not a one, the result is normalized. The result is rounded to\nsingle-precision under control of the floating-point rounding control field RN of the FPSCR\nand placed into frD(ps0).\nThe floating-point operand in register frA(ps1) is divided by the floating-point operand in\nregister frB(ps1). The remainder is not supplied as a result. If the most-significant bit of the\nresultant significand is not a one, the result is normalized. The result is rounded to\nsingle-precision under control of the floating-point rounding control field RN of the FPSCR\nand placed into frD(ps1).\nFloating-point division is based on exponent subtraction and division of the significands.\nFPSCR[FPRF] is set to the class and sign of the ps0 result, except for invalid operation\nexceptions when FPSCR[VE] = 1 and zero divide exceptions when FPSCR[ZE] = 1."
}