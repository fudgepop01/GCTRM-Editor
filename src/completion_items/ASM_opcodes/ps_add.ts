import {frD, frA, frB, Rc} from './instruction';

const pseudocode = `
if (HID2[PSE] == 0) {
  Goto illegial instruction error handler
}
frD(ps0) = frA(ps0) + frB(ps0)
frD(ps1) = frA(ps1) + frB(ps1)
`;

export default {
  "mnemonic": "ps_add",
  "fullName": "Paired Single Add",
  "baseHex": "1000002A",
  "opcode": "000100",
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
    value: 21,
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
  "description": "ps_add. frD,frA,frB (Rc = 1)\n    If HID2[PSE] = 0 then invoke the illegal instruction error handler\n    frD(ps0) ¬ frA(ps0) + frB(ps0)\n    frD(ps1) ¬ frA(ps1) + frB(ps1)\nThe floating-point operand in frA(ps0) is added to the floating-point operand in frB(ps0). If\nthe most-significant bit of the resultant significand is not a one, the result is normalized. The\nresult is rounded to single-precision under control of the floating-point rounding control field\nRN of the FPSCR and placed into frD(ps0).\nThe floating-point operand in frA(ps1) is added to the floating-point operand in frB(ps1). If\nthe most-significant bit of the resultant significand is not a one, the result is normalized. The\nresult is rounded to single-precision under control of the floating-point rounding control field\nRN of the FPSCR and placed into frD(ps1).\nFloating-point addition is based on exponent comparison and addition of the two significands.\nThe exponents of the two operands are compared, and the significand accompanying the\nsmaller exponent is shifted right, with its exponent increased by one for each bit shifted, until\nthe two exponents are equal. The two significands are then added or subtracted as appropriate,\ndepending on the signs of the operands. All 25 bits in the significand as well as all three guard\nbits (G, R, and X) enter into the computation.\nIf a carry occurs, the sum's significand is shifted right one bit position and the exponent is\nincreased by one. FPSCR[FPRF] is set to the class and sign of the ps0 result, except for invalid\noperation exceptions when FPSCR[VE] = 1."
}