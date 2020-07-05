import {rD, rA, OE, Rc} from './instruction';

const pseudocode = `
rD = ¬ (rA) + 1
`;

export default {
  "mnemonic": "neg",
  "fullName": "Negate",
  "baseHex": "7C0000D0",
  "opcode": "011111",
  "parameters": [

    rD,
    rA
  ],
  "modifiers": [
    OE,
    Rc
  ],
  pseudocode,
  "extension": {
    value: 104,
    bits: [
      22,
      30
    ]
  },
  "reserved": [
    [
      16,
      20
    ]
  ],
  "description": "The value 1 is added to the complement of the value in rA, and the resulting two’s\ncomplement is placed into rD.\nIf rA contains the most negative 32-bit number (0x8000_0000), the reseult is the most\nnegative number and if OE = 1, OV is set."
}