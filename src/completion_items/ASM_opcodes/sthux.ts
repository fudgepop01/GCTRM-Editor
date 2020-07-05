import {rS, rA, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "sthux",
  "fullName": "Store Half Word with Update Indexed",
  "baseHex": "7C00036E",
  "opcode": "011111",
  "parameters": [

    rS,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 439,
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
  "description": "EA is the sum (rA) + (rB). The contents of the low-order 16 bits of rS are stored into the half\nword in memory addressed by EA.\nEA is placed into rA.\nIf rA = 0, the instruction form is invalid."
}