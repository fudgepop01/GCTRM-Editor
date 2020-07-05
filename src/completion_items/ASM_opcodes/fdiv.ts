import {frD, frA, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "fdiv",
  "fullName": "Floaiting Divide (Double-Precision),(x’FC00 0024’)",
  "baseHex": "FC000024",
  "opcode": "111111",
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
  "description": "The floating-point operand in register frA is divided by the floating-point operand in\nregister frB. The remainder is not supplied as a result.\nIf the most-significant bit of the resultant significand is not a one, the result is normalized.\nThe result is rounded to double-precision under control of the floating-point rounding\ncontrol field RN of the FPSCR and placed into frD.\nFloating-point division is based on exponent subtraction and division of the significands.\nFPSCR[FPRF] is set to the class and sign of the result, except for invalid operation\nexceptions when FPSCR[VE] = 1 and zero divide exceptions when FPSCR[ZE] = 1."
}