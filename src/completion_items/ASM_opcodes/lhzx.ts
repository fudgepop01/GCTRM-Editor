import {rD, rA, rB} from './instruction';

const pseudocode = `
if (rA == 0) {
  b = 0
}
else {
  b = (rA)
}
EA = b + (rB)
rD = (16)0 || MEM(EA, 2)
`;

export default {
  "mnemonic": "lhzx",
  "fullName": "Load Half Word and Zero Indexed",
  "baseHex": "7C00022E",
  "opcode": "011111",
  "parameters": [

    rD,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 279,
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
  "description": "EA is the sum (rA|0) + (rB). The half word in memory addressed by EA is loaded into the\nlow-order 16 bits of rD. The remaining bits in rD are cleared."
}