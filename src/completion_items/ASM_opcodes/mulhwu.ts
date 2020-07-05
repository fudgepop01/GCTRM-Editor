import {rD, rA, rB, Rc} from './instruction';

const pseudocode = `
prod[0-63] = (rA) * (rB)
rD = prod[0-31]
`;

export default {
  "mnemonic": "mulhwu",
  "fullName": "Multiply High Word Unsigned",
  "baseHex": "7C000016",
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
    value: 11,
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
  "description": "mulhwu. rD,rA,rB (Rc = 1)\n    prod[0–63] ¬ (rA) * (rB\n    rD ¬ prod[0–31]\nThe 32-bit operands are the contents rA and rB. The high-order 32 bits of the 64-bit\nproduct of the operands are placed into rD.\nBoth the operands and the product are interpreted as unsigned integers, except that if\nRc = 1 the first three bits of CR0 field are set by signed comparison of the result to zero.\nThis instruction may execute faster on some implementations if rB contains the operand\nhaving the smaller absolute value."
}