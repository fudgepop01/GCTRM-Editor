import {frD, rA, rB} from './instruction';

const pseudocode = `
EA = (rA) + (rB)
frD = MEM(EA, 8)
rA = EA
`;

export default {
  "mnemonic": "lfdux",
  "fullName": "Load Floating-Point Double with Update Indexed",
  "baseHex": "7C0004EE",
  "opcode": "011111",
  "parameters": [

    frD,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 631,
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
  "description": "EA is the sum (rA) + (rB).\nThe double word in memory addressed by EA is placed into frD.\nEA is placed into rA.\nIf rA = 0, the instruction form is invalid."
}