import {frD, frA, frC, frB, Rc} from './instruction';

const pseudocode = `
if (HID2[PSE] == 0) {
  frD = (frA * frC) + frB
}
else {
  frD(ps0) = (frA(ps0) * frC(ps0)) + frB(ps0)
  frD(ps1) = frD(ps0)
}
`;

export default {
  "mnemonic": "fmadds",
  "fullName": "Floaiting Multiply-Add Single",
  "baseHex": "EC00003A",
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
    value: 29,
    bits: [
      26,
      30
    ]
  },
  "reserved": [
    11,
    15
  ],
  "description": "The floating-point operand in register frA is multiplied by the floating-point operand in\nregister frC. The floating-point operand in register frB is added to this intermediate result.\nIf the most-significant bit of the resultant significand is not a one, the result is normalized. The\nresult is rounded to single-precision under control of the floating-point rounding control field\nRN of the FPSCR and placed into frD.\nFPSCR[FPRF] is set to the class and sign of the result, except for invalid operation exceptions\nwhen FPSCR[VE] = 1.\nIf the HID2[PSE] = 1 then the result is placed in both frD(ps0) and frD(ps1)."
}