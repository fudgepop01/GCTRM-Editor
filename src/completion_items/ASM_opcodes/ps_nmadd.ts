import {frD, frA, frC, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "ps_nmadd",
  "fullName": "Paired Single Negative Multiply-Add",
  "baseHex": "1000003E",
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
    value: 31,
    bits: [
      26,
      30
    ]
  },
  "reserved": null,
  "description": "ps_nmadd. frD,frA,frC,frB (Rc = 1)\n    if HID2[PSE] = 0 then invoke the illegal instruction error handler\n    frD(ps0) ¬ -[frA(ps0) * frC(ps0) + frB(ps0) ]\n    frD(ps1) ¬ -[frA(ps1) * frC(ps1) + frB(ps1) ]\nThe floating-point operand in register frA(ps0) is multiplied by the floating-point operand in register\nfrC(ps0).\nThe floating-point operand in register frB(ps0) is added to this intermediate product and the result is\nnegated.\nIf the most-significant bit of the resultant significand is not a one, the result is normalized. The result\nis rounded to single-precision under control of the floating-point rounding control field RN of the\nFPSCR and placed into frD(ps0).\nThe floating-point operand in register frA(ps1) is multiplied by the floating-point operand in register\nfrC(ps1).\nThe floating-point operand in register frB(ps1) is added to this intermediate product and the result is\nnegated.\nIf the most-significant bit of the resultant significand is not a one, the result is normalized. The result\nis rounded to single-precision under control of the floating-point rounding control field RN of the\nFPSCR and placed into frD(ps1).\nThis instruction produces the same result as would be obtained by using the Paired Single\nMultiply-Add (ps_maddx) instruction and then negating the result, with the following exceptions:\n• QNaNs propagate with no effect on their sign bit.\n• QNaNs that are generated as the result of a disabled invalid operation exception have a sign\nbit of zero.\n• SNaNs that are converted to QNaNs as the result of a disabled invalid operation exception\nretain the sign bit of the SNaN.\nFPSCR[FPRF] is set to the class and sign of the ps0 result, except for invalid operation exceptions\nwhen FPSCR[VE] = 1."
}