import {rD, rA, d} from './instruction';

const pseudocode = `
if (rA == 0) {
  b = 0
}
else {
  b = (rA)
}
EA = b + EXTS(d)
rD = MEM(EA, 4)
`;

export default {
  "mnemonic": "lwz",
  "fullName": "Load Word and Zero",
  "baseHex": "80000000",
  "opcode": "100000",
  "parameters": [

    rD,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "EA is the sum (rA|0) + d. The word in memory addressed by EA is loaded into rD."
}