import {rD, rA, d} from './instruction';

const pseudocode = `
EA = rA + EXTS(d)
rD = MEM(EA, 4)
rA = EA
`;

export default {
  "mnemonic": "lwzu",
  "fullName": "Load Word and Zero with Update",
  "baseHex": "84000000",
  "opcode": "100001",
  "parameters": [

    rD,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "EA is the sum (rA) + d. The word in memory addressed by EA is loaded into rD.\nEA is placed into rA.\nIf rA = 0, or rA = rD, the instruction form is invalid."
}