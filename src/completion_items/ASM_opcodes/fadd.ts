import {frD, frA, frB, Rc} from './instruction';


const pseudocode = `
undefined
`;

export default {
  "mnemonic": "fadd",
  "fullName": "Floating Add (Double-Precision) (x’FC00 002A’)",
  "baseHex": "FC00002A",
  "opcode": "111111",
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
  "description": "The floating-point operand in frA is added to the floating-point operand in frB. If the mostsignificant\nbit of the resultant significand is not a one, the result is normalized. The result is rounded\nto double-precision under control of the floating-point rounding control field RN of the FPSCR and\nplaced into frD.\nFloating-point addition is based on exponent comparison and addition of the two significands. The\nexponents of the two operands are compared, and the significand accompanying the smaller\nexponent is shifted right, with its exponent increased by one for each bit shifted, until the two\nexponents are equal. The two significands are then added or subtracted as appropriate, depending\non the signs of the operands. All 53 bits in the significand as well as all three guard bits (G, R, and\nX) enter into the computation.\nIf a carry occurs, the sum's significand is shifted right one bit position and the exponent is increased\nby one. FPSCR[FPRF] is set to the class and sign of the result, except for invalid operation\nexceptions when FPSCR[VE] = 1."
}