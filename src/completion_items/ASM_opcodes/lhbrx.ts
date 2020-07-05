import {rD, rA, rB} from './instruction';

const pseudocode = `
if (rA == 0) {
  b = 0
}
else {
  b = (rA)
}
EA = b + (rB)
rD = (16)0 || MEM(EA + 1, 1) || MEM(EA, 1)
`;

export default {
  "mnemonic": "lhbrx",
  "fullName": "Load Half Word Byte-Reverse Indexed",
  "baseHex": "7C00062C",
  "opcode": "011111",
  "parameters": [

    rD,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 790,
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
  "description": "EA is the sum (rA|0) + (rB). Bits 0–7 of the half word in memory addressed by EA are loaded\ninto the low-order eight bits of rD. Bits 8–15 of the half word in memory addressed by EA\nare loaded into the subsequent low-order eight bits of rD. The remaining bits in rD are\ncleared.\nThe PowerPC architecture cautions programmers that some implementations of the\narchitecture may run the lhbrx instructions with greater latency than other types of load\ninstructions."
}