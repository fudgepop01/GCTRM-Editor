import {rD, rA, rB} from './instruction';

const pseudocode = `
if (rA == 0) {
  b = 0
}
else {
  b = (rA)
}
EA b + (rB)
rD = (24)0 || MEM(EA, 1)
`;

export default {
  "mnemonic": "lbzx",
  "fullName": "Load Byte and Zero Indexed",
  "baseHex": "7C0000AE",
  "opcode": "011111",
  "parameters": [

    rD,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 87,
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
  "description": "EA is the sum (rA|0) + (rB). The byte in memory addressed by EA is loaded into the\nlow-order eight bits of rD. The remaining bits in rD are cleared."
}