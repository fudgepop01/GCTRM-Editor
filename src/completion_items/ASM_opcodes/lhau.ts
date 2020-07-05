import {rD, rA, d} from './instruction';

const pseudocode = `
EA = (rA) + EXTS(d)
rD = EXTS(MEM(EA, 2))
rA = EA
`;

export default {
  "mnemonic": "lhau",
  "fullName": "Load Half Word Algebraic with Update",
  "baseHex": "AC000000",
  "opcode": "101011",
  "parameters": [

    rD,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "EA is the sum (rA) + d. The half word in memory addressed by EA is loaded into the\nlow-order 16 bits of rD. The remaining bits in rD are filled with a copy of the\nmost-significant bit of the loaded half word.\nEA is placed into rA.\nIf rA = 0 or rA = rD, the instruction form is invalid."
}