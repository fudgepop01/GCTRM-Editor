import {frD, frA, frC, frB, Rc} from './instruction';

const pseudocode = `
if (HID2[PSE] == 0) {
  frD = -([frA * frC] + frB)
}
else {
  frD(ps0) = -([frA(ps0) * frC(ps0)] + frB(ps0))
  frD(ps1) = frD(ps0)
}
`;

export default {
  "mnemonic": "fnmadds",
  "fullName": "Floating Negative Multiply-Add Single",
  "baseHex": "EC00003E",
  "opcode": "111011",
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
    value: 31,
    bits: [
      26,
      30
    ]
  },
  "reserved": null,
  "description": "The floating-point operand in register frA is multiplied by the floating-point operand in\nregister frC. The floating-point operand in register frB is added to this intermediate result.\nIf the most-significant bit of the resultant significand is not a one, the result is normalized.\nThe result is rounded to single-precision under control of the floating-point rounding\ncontrol field RN of the FPSCR, then negated and placed into frD.\nThis instruction produces the same result as would be obtained by using the Floating\nMultiply-Add Single (fmaddsx) instruction and then negating the result, with the following\nexceptions:\n• QNaNs propagate with no effect on their sign bit.\n• QNaNs that are generated as the result of a disabled invalid operation exception have\na sign bit of zero.\n• SNaNs that are converted to QNaNs as the result of a disabled invalid operation\nexception retain the sign bit of the SNaN.\nFPSCR[FPRF] is set to the class and sign of the result, except for invalid operation\nexceptions when FPSCR[VE] = 1.\nIf the HID2[PSE] = 1 then the result is placed in both frD(ps0) and frD(ps1)."
}