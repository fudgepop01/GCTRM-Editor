import {rD, rA, rB, OE, Rc} from './instruction';

const pseudocode = `
prod[0-48] = (rA) * (rB)
rD = prod[16-48]
`;

export default {
  "mnemonic": "mullw",
  "fullName": "Multiply Low Word",
  "baseHex": "7C0001D6",
  "opcode": "011111",
  "parameters": [

    rD,
    rA,
    rB
  ],
  "modifiers": [
    OE,
    Rc
  ],
  pseudocode,
  "extension": {
    value: 235,
    bits: [
      22,
      30
    ]
  },
  "reserved": null,
  "description": "The 32-bit operands are the contents of rA and rB. The low-order of the 64-bit product (rA)\n* (rB) are placed into rD.\nThe low-order 32-bits of the product are independent of whether the operands are regarded\nas signed or unsigned 32-bit integers.\nIf OE = 1, then OV is set if the product cannot be represented in 32 bits. Both the operands\nand the product are interpreted as signed integers.\nNOTE: This instruction may execute faster on some implementations if rB contains the\noperand having the smaller absolute value."
}