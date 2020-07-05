import {rD, rA, rB, Rc} from './instruction';

const pseudocode = `
prod[0-63] = (rA) * (rB)
rD = prod
`;

export default {
  "mnemonic": "mulhw",
  "fullName": "Multiply High Word",
  "baseHex": "7C000096",
  "opcode": "011111",
  "parameters": [

    rD,
    rA,
    rB
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 75,
    bits: [
      22,
      30
    ]
  },
  "reserved": [
    [
      21
    ]
  ],
  "description": "mulhw. rD,rA,rB (Rc = 1)\n    prod[0–63] ¬ (rA * (rB\n    rD ¬ prod\nThe 32-bit product is formed from the contents rA and rB. The high-order 32 bits of the 64-bit\nproduct of the operands are placed into rD. Both the operands and the product are interpreted\nas signed integers.\nThis instruction may execute faster on some implementations if rB contains the operand\nhaving the smaller absolute value."
}