import {frD, frA, frC, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "fmul",
  "fullName": "Floating Multiply (Double-Precision)",
  "baseHex": "FC000032",
  "opcode": "111111",
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
    16,
    20
  ],
  "description": "The floating-point operand in register frA is multiplied by the floating-point operand in\nregister frC.\nIf the most-significant bit of the resultant significand is not a one, the result is normalized. The\nresult is rounded to double-precision under control of the floating-point rounding control field\nRN of the FPSCR and placed into frD.\nFloating-point multiplication is based on exponent addition and multiplication of the\nsignificands.\nFPSCR[FPRF] is set to the class and sign of the result, except for invalid operation exceptions\nwhen FPSCR[VE] = 1."
}