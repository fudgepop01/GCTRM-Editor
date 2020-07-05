import {rD, rA, d} from './instruction';

const pseudocode = `
EA = (rA) + EXTS(d)
rD = (24)0 || MEM(EA, 1)
rA = EA
`;

export default {
  "mnemonic": "lbzu",
  "fullName": "Load Byte and Zero with Update",
  "baseHex": "8C000000",
  "opcode": "100011",
  "parameters": [

    rD,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "EA is the sum (rA) + d. The byte in memory addressed by EA is loaded into the low-order\neight bits of rD. The remaining bits in rD are cleared.\nEA is placed into rA.\nIf rA = 0, or rA = rD, the instruction form is invalid."
}