import {frD, d, rA} from './instruction';

const pseudocode = `
if (rA == 0) {
  b = 0
}
else {
  b = (rA)
}
EA = b + EXTS(d)
frD = MEM(EA, 8)
`;

export default {
  "mnemonic": "lfd",
  "fullName": "Load Floating-Point Double",
  "baseHex": "C8000000",
  "opcode": "110010",
  "parameters": [

    frD,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "EA is the sum (rA|0) + d.\nThe double word in memory addressed by EA is placed into frD."
}