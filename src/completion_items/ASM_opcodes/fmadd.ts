import {frD, frA, frC, frB, Rc} from './instruction';

const pseudocode = `
frD = (frA * frC) + frB
`;

export default {
  "mnemonic": "fmadd",
  "fullName": "Floating Multiply-Add (Double-Precision)",
  "baseHex": "FC00003A",
  "opcode": "111111",
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
  "description": "The floating-point operand in register frA is multiplied by the floating-point operand in\nregister frC. The floating-point operand in register frB is added to this intermediate result.\nIf the most-significant bit of the resultant significand is not a one, the result is normalized.\nThe result is rounded to double-precision under control of the floating-point rounding\ncontrol field RN of the FPSCR and placed into frD.\nFPSCR[FPRF] is set to the class and sign of the result, except for invalid operation\nexceptions when FPSCR[VE] = 1."
}