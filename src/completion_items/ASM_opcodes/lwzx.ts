import {rD, rA, rB} from './instruction';

const pseudocode = `
if (rA == 0) {
  b = 0
}
else {
  b = (rA)
}
EA = b + rB
rD = MEM(EA, 4)
`;

export default {
  "mnemonic": "lwzx",
  "fullName": "Load Word and Zero Indexed",
  "baseHex": "7C00002E",
  "opcode": "011111",
  "parameters": [

    rD,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 23,
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
  "description": "EA is the sum (rA|0) + (rB). The word in memory addressed by EA is loaded into rD."
}