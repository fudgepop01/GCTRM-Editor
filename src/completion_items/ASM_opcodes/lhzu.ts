import {rD, rA, d} from './instruction';

const pseudocode = `
EA = rA + EXTS(d)
rD = (16)0 || MEM(EA, 2)
rA = EA
`;

export default {
  "mnemonic": "lhzu",
  "fullName": "Load Half Word and Zero with Update",
  "baseHex": "A4000000",
  "opcode": "101001",
  "parameters": [

    rD,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "EA is the sum (rA) + d. The half word in memory addressed by EA is loaded into the\nlow-order 16 bits of rD. The remaining bits in rD are cleared.\nEA is placed into rA.\nIf rA = 0 or rA = rD, the instruction form is invalid."
}