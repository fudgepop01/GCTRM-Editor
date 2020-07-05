import {rD, rA, rB} from './instruction';

const pseudocode = `
if (rA == 0) {
  b = 0
}
else {
  b = (rA)
}
EA = b + (rB)
rD = MEM(EA + 3, 1) || MEM(EA + 2, 1) || MEM(EA + 1, 1) || MEM(EA, 1)
`;

export default {
  "mnemonic": "lwbrx",
  "fullName": "Load Word Byte-Reverse Indexed",
  "baseHex": "7C00042C",
  "opcode": "011111",
  "parameters": [

    rD,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 534,
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
  "description": "EA is the sum (rA|0) + rB. Bits 0–7 of the word in memory addressed by EA are loaded\ninto the low-order 8 bits of rD. Bits 8–15 of the word in memory addressed by EA are\nloaded into the subsequent low-order 8 bits of rD. Bits 16–23 of the word in memory\naddressed by EA are loaded into the subsequent low-order eight bits of rD. Bits 24–31 of\nthe word in memory addressed by EA are loaded into the subsequent low-order 8 bits of rD.\nThe PowerPC architecture cautions programmers that some implementations of the\narchitecture may run the lwbrx instructions with greater latency than other types of load\ninstructions."
}