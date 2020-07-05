import {frD, frA, frC, frB, Rc} from './instruction';

const pseudocode = `
frD = - ([frA * frC] - frB)
`;

export default {
  "mnemonic": "fnmsub",
  "fullName": "Floating Negative Multiply-Subtract (Double-Precision)",
  "baseHex": "FC00003C",
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
    value: 30,
    bits: [
      26,
      30
    ]
  },
  "reserved": null,
  "description": "The floating-point operand in register frA is multiplied by the floating-point operand in\nregister frC. The floating-point operand in register frB is subtracted from this intermediate\nresult.\nIf the most-significant bit of the resultant significand is not one, the result is normalized. The\nresult is rounded to double-precision under control of the floating-point rounding control field\nRN of the FPSCR, then negated and placed into frD.\nThis instruction produces the same result obtained by negating the result of a Floating\nMultiply-Subtract (fmsubx) instruction with the following exceptions:\n• QNaNs propagate with no effect on their sign bit.\n• QNaNs that are generated as the result of a disabled invalid operation exception have\na sign bit of zero.\n• SNaNs that are converted to QNaNs as the result of a disabled invalid operation\nexception retain the sign bit of the SNaN.\nFPSCR[FPRF] is set to the class and sign of the result, except for invalid operation exceptions\nwhen FPSCR[VE] = 1."
}