import {rD, rA, d} from './instruction';

const pseudocode = `
if (rA == 0) {
  b = 0
}
else {
  b = (rA)
}
EA = b + EXTS(d)
rD = EXTS(MEM(EA, 2))
`;

export default {
  "mnemonic": "lha",
  "fullName": "Load Half Word Algebraic",
  "baseHex": "A8000000",
  "opcode": "101010",
  "parameters": [

    rD,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "EA is the sum (rA|0) + d. The half word in memory addressed by EA is loaded into the\nlow-order 16 bits of rD. The remaining bits in rD are filled with a copy of the most-significant\nbit of the loaded half word."
}