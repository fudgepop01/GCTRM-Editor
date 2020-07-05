import {frD, frA, frC, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "ps_sel",
  "fullName": "Paired Single Select",
  "baseHex": "1000002E",
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
    value: 23,
    bits: [
      26,
      30
    ]
  },
  "reserved": null,
  "description": "ps_sel. frD,frA,frC,frB (Rc = 1)\n    If HID2[PSE] = 0 then invoke the illegal instruction error handler\n    if (frA(ps0) ³ 0.0 )\n    then frD(ps0) ¬ frC(ps0)\n    else frD(ps0) ¬ frB(ps0)\n    if (frA(ps1) ³ 0.0 )\n    then frD(ps1) ¬ frC(ps1)\n    else frD(ps1) ¬ frB(ps1)\nThe floating-point operand in register frA(ps0) is compared to the value zero. If the operand\nis greater than or equal to zero, register frD(ps0) is set to the contents of register frC(ps0). If\nthe operand is less than zero or is a NaN, register frD(ps0) is set to the contents of register\nfrB(ps0).\nThe floating-point operand in register frA(ps1) is compared to the value zero. If the operand\nis greater than or equal to zero, register frD(ps1) is set to the contents of register frC(ps1). If\nthe operand is less than zero or is a NaN, register frD(ps1) is set to the contents of register\nfrB(ps1).\nThese comparisons ignore the sign of zero (that is, regard +0 as equal to –0).\nCare must be taken in using ps_sel if IEEE compatibility is required, or if the values being\ntested can be NaNs or infinities."
}