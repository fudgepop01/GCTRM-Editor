import {rD, rA, rB} from './instruction';

const pseudocode = `
EA = (rA) + (rB)
rD = EXTS(MEM(EA, 2))
rA = EA
`;

export default {
  "mnemonic": "lhaux",
  "fullName": "Load Half Word Algebraic with Update Indexed",
  "baseHex": "7C0002EE",
  "opcode": "011111",
  "parameters": [

    rD,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 375,
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
  "description": "EA is the sum (rA) + (rB). The half word in memory addressed by EA is loaded into the\nlow-order 16 bits of rD. The remaining bits in rD are filled with a copy of the most-significant\nbit of the loaded half word.\nEA is placed into rA.\nIf rA = 0 or rA = rD, the instruction form is invalid."
}