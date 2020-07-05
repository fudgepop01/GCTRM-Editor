import {frD, rA, d} from './instruction';

const pseudocode = `
EA = (rA) + EXTS(d)
frD = MEM(EA, 8)
rA = EA
`;

export default {
  "mnemonic": "lfdu",
  "fullName": "Load Floating-Point Double with Update",
  "baseHex": "CC000000",
  "opcode": "110011",
  "parameters": [

    frD,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "EA is the sum (rA) + d.\nThe double word in memory addressed by EA is placed into frD.\nEA is placed into rA.\nIf rA = 0, the instruction form is invalid."
}