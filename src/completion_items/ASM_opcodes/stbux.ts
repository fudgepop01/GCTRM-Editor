import {rS, rA, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "stbux",
  "fullName": "Store Byte with Update Indexed",
  "baseHex": "7C0001EE",
  "opcode": "011111",
  "parameters": [

    rS,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 247,
    bits: [
      22,
      30
    ]
  },
  "reserved": [
    [
      31
    ]
  ],
  "description": "EA is the sum (rA) + (rB). The contents of the low-order eight bits of rS are stored into the\nbyte in memory addressed by EA.\nEA is placed into rA.\nIf rA = 0, the instruction form is invalid."
}