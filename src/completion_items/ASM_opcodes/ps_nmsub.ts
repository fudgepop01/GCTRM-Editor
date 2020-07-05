import {frD, frA, frC, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "ps_nmsub",
  "fullName": "Paired Single Negative Multiply-Subtract",
  "baseHex": "1000003C",
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
    value: 30,
    bits: [
      26,
      30
    ]
  },
  "reserved": null,
  "description": "ps_nmsub. frD,frA,frC,frB (Rc = 1)\n    if HID2[PSE] = 0 then invoke the illegal instruction error handler\n    frD(ps0) ¬ -[frA(ps0) * frC(ps0) - frB(ps0) ]\n    frD(ps1) ¬ -[frA(ps1) * frC(ps1) - frB(ps1) ]\nThe floating-point operand in register frA(ps0) is multiplied by the floating-point operand in\nregister frC(ps0). The floating-point operand in register frB(ps0) is subtracted from this\nintermediate product. If the most-significant bit of the resultant significand is not a one, the\nresult is normalized. The result is rounded to single-precision under control of the\nfloating-point rounding control field RN of the FPSCR, then negated and placed into\nfrD(ps0).\nThe floating-point operand in register frA(ps1) is multiplied by the floating-point operand in\nregister frC(ps1). The floating-point operand in register frB(ps1) is subtracted from this\nintermediate product. If the most-significant bit of the resultant significand is not a one, the\nresult is normalized. The result is rounded to single-precision under control of the\nfloating-point rounding control field RN of the FPSCR, then negated and placed into\nfrD(ps1).\nThis instruction produces the same result obtained by negating the result of a Floating\nMultiply-Subtract (ps_msubx) instruction with the following exceptions:\n• QNaNs propagate with no effect on their sign bit.\n• QNaNs that are generated as the result of a disabled invalid operation exception have\na sign bit of zero.\n• SNaNs that are converted to QNaNs as the result of a disabled invalid operation\nexception retain the sign bit of the SNaN.\nFPSCR[FPRF] is set to the class and sign of the ps0 result, except for invalid operation\nexceptions when FPSCR[VE] = 1."
}