import {frD, frA, frC, Rc} from './instruction';

const pseudocode = `
if (HID2[PSE == 0]) {
  frD = frA * frC
}
else {
  frD[ps0] = frA(ps0) * frC(ps0)
  frD(ps1) = frD(ps0)
}
`;

export default {
  "mnemonic": "fmuls",
  "fullName": "Floating Multiply Single",
  "baseHex": "EC000032",
  "opcode": "111011",
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
  "description": "The floating-point operand in register frA is multiplied by the floating-point operand in\nregister frC.\nIf the most-significant bit of the resultant significand is not a one, the result is normalized.\nThe result is rounded to single-precision under control of the floating-point rounding\ncontrol field RN of the FPSCR and placed into frD.\nFloating-point multiplication is based on exponent addition and multiplication of the\nsignificands.\nFPSCR[FPRF] is set to the class and sign of the result, except for invalid operation\nexceptions when FPSCR[VE] = 1.\nIf the HID2[PSE] = 1 then the result is placed in both frD(ps0) and frD(ps1)."
}