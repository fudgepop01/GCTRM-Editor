import {rD, rA, d} from './instruction';

const pseudocode = `
if (rA == 0) {
  b = 0
}
else {
  b = (rA)
}
EA = b + EXTS(d)
rD = (16)0 || MEM(EA, 2)
`;

export default {
  "mnemonic": "lhz",
  "fullName": "Load Half Word and Zero",
  "baseHex": "A0000000",
  "opcode": "101000",
  "parameters": [

    rD,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "EA ¬ b + EXTS(d)\nrD ¬ (16)0 || MEM(EA, 2)\nEA is the sum (rA|0) + d. The half word in memory addressed by EA is loaded into the\nlow-order 16 bits of rD. The remaining bits in rD are cleared."
}