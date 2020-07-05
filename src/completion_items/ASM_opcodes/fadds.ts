import {frD, frA, frB, Rc} from './instruction';

const pseudocode = `
if (HID2[PSE] == 0) {
  frD = frA + frB
}
else {
  frD(ps0) = frA(ps0) + frB(ps0)
  frD(ps1) = frD(ps0)
}
`;

export default {
  "mnemonic": "fadds",
  "fullName": "Floating Add Single",
  "baseHex": "EC00002A",
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
    value: 21,
    bits: [
      26,
      30
    ]
  },
  "reserved": [
    21,
    25
  ],
  "description": "The floating-point operand in frA is added to the floating-point operand in frB. If the most-significant\nbit of the resultant significand is not a one, the result is normalized. The result is rounded to the\nsingle-precision under control of the floating-point rounding control field RN of the FPSCR and\nplaced into frD.\nFloating-point addition is based on exponent comparison and addition of the two significands. The\nexponents of the two operands are compared, and the significand accompanying the smaller exponent\nis shifted right, with its exponent increased by one for each bit shifted, until the two exponents are\nequal. The two significands are then added or subtracted as appropriate, depending on the signs of the\noperands. All 53 bits in the significand as well as all three guard bits (G, R, and X) enter into the\ncomputation.\nIf a carry occurs, the sum's significand is shifted right one bit position and the exponent is increased\nby one. FPSCR[FPRF] is set to the class and sign of the result, except for invalid operation exceptions\nwhen FPSCR[VE] = 1.\nIf the HID2[PSE] = 1 then the sum is placed in both frD(ps0) and frD(ps1)."
}