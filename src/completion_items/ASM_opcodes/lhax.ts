import {rD, rA, rB} from './instruction';

const pseudocode = `
if (rA == 0) {
  b = 0
}
else {
  b = (rA)
}
EA = b + (rB)
rD = EXTS(MEM(EA, 2))
`;

export default {
  "mnemonic": "lhax",
  "fullName": "Load Half Word Algebraic Indexed",
  "baseHex": "7C0002AE",
  "opcode": "011111",
  "parameters": [

    rD,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 343,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    [
      31
    ]
  ],
  "description": "EA is the sum (rA|0) + (rB). The half word in memory addressed by EA is loaded into the\nlow-order 16 bits of rD. The remaining bits in rD are filled with a copy of the\nmost-significant bit of the loaded half word."
}