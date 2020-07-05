import {rD, rA, rB} from './instruction';

const pseudocode = `
EA = (rA) + (rB)
rD = MEM(EA, 4)
rA = EA
`;

export default {
  "mnemonic": "lwzux",
  "fullName": "Load Word and Zero with Update Indexed",
  "baseHex": "7C00006E",
  "opcode": "011111",
  "parameters": [

    rD,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 55,
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
  "description": "EA is the sum (rA) + (rB). The word in memory addressed by EA is loaded into rD\nEA is placed into rA.\nIf rA = 0, or rA = rD, the instruction form is invalid."
}