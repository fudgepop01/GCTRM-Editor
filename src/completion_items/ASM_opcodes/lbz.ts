import {rD, d, rA} from './instruction';

const pseudocode = `
if (rA == 0) {
  b = 0
}
else {
  b = rA
}
EA = b + EXTS(d)
rD = (24)0 || MEM(EA, 1)
`;

export default {
  "mnemonic": "lbz",
  "fullName": "Load Byte and Zero",
  "baseHex": "88000000",
  "opcode": "100010",
  "parameters": [

    rD,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "EA is the sum (rA|0) + d. The byte in memory addressed by EA is loaded into the low-order\neight bits of rD. The remaining bits in rD are cleared."
}