import {frD, frA, frC, frB, Rc} from './instruction';

const pseudocode = `
if (frA >= 0.0) {
  frD = (frC)
}
else {
  frD = (frB)
}
`;

export default {
  "mnemonic": "fsel",
  "fullName": "Floating Select",
  "baseHex": "FC00002E",
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
    value: 23,
    bits: [
      26,
      30
    ]
  },
  "reserved": null,
  "description": "The floating-point operand in register frA is compared to the value zero. If the operand is\ngreater than or equal to zero, register frD is set to the contents of register frC. If the operand\nis less than zero or is a NaN, register frD is set to the contents of register frB. The\ncomparison ignores the sign of zero (that is, regards +0 as equal to –0).\nCare must be taken in using fsel if IEEE compatibility is required, or if the values being\ntested can be NaNs or infinities.\nFor examples of uses of this instruction, see Section D.3, “Floating-Point Conversions,”\nand Section D.5, “Floating-Point Selection,” in The Programming Environments Manual.\nThis instruction is optional in the PowerPC architecture.\nWhen HID2[PSE] = 1 and the selected source is a double-precision floating-point operand,\nthen the selected operand from frB or frC is copied to frD (as described above).\nWhen HID2[PSE] = 1 and the selected source contains paired-single floating-point\noperands, only frA(ps0) is compared to zero and the selected operand from frB(ps0) or\nfrC(ps0) is copied to frD[ps0]. The content of frD[ps1] is undefined."
}