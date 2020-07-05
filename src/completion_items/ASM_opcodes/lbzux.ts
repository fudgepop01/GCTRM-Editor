import {rD, rA, rB} from './instruction';

const pseudocode = `
EA = (rA) + (rB)
rD = (24)0 || MEM(EA, 1)
rA = EA
`;

export default {
  "mnemonic": "lbzux",
  "fullName": "Load Byte and Zero with Update Indexed",
  "baseHex": "7C0000EE",
  "opcode": "011111",
  "parameters": [

    rD,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 119,
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
  "description": "EA is the sum (rA) + (rB). The byte in memory addressed by EA is loaded into the low-order\neight bits of rD. The remaining bits in rD are cleared.\nEA is placed into rA.\nIf rA = 0 or rA = rD, the instruction form is invalid."
}