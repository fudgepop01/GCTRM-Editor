import {frD, rA, rB} from './instruction';

const pseudocode = `
if (rA == 0) {
  b = 0
}
else {
  b = (rA)
}
EA = b + (rB)
frD = MEM(EA, 8)
`;

export default {
  "mnemonic": "lfdx",
  "fullName": "Load Floating-Point Double Indexed",
  "baseHex": "7C0004AE",
  "opcode": "011111",
  "parameters": [

    frD,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 599,
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
  "description": "EA is the sum (rA|0) + (rB).\nThe double word in memory addressed by EA is placed into frD."
}