import {rD, rA, rB} from './instruction';

const pseudocode = `
EA = (rA) + (rB)
rD = (16)0 || MEM(EA, 2)
rA = EA
`;

export default {
  "mnemonic": "lhzux",
  "fullName": "Load Half Word and Zero with Update Indexed",
  "baseHex": "7C00026E",
  "opcode": "011111",
  "parameters": [

    rD,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 311,
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
  "description": "EA is the sum (rA) + (rB). The half word in memory addressed by EA is loaded into the\nlow-order 16 bits of rD. The remaining bits in rD are cleared.\nEA is placed into rA.\nIf rA = 0 or rA = rD, the instruction form is invalid."
}