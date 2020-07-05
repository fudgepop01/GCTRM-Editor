import {frD, frA, frB, Rc} from './instruction';

const pseudocode = `
if (HID2[PSE] == 0) {
  frD = frA - frB
}
else {
  frD(ps0) = frA(ps0) - frB(ps0)
  frD(ps1) = frD(ps0)
}
`;

export default {
  "mnemonic": "fsubs",
  "fullName": "Floating Subtract Single",
  "baseHex": "EC000028",
  "opcode": "111011",
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
    value: 20,
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
  "description": "The floating-point operand in register frB is subtracted from the floating-point operand in\nregister frA. If the most-significant bit of the resultant significand is not a one, the result is\nnormalized. The result is rounded to single-precision under control of the floating-point\nrounding control field RN of the FPSCR and placed into frD.\nThe execution of the fsubs instruction is identical to that of fadds, except that the contents\nof frB participate in the operation with its sign bit (bit 0) inverted.\nFPSCR[FPRF] is set to the class and sign of the result, except for invalid operation\nexceptions when FPSCR[VE] = 1.\nIf the HID2[PSE] = 1 then the result is placed in both frD(ps0) and frD(ps1)."
}