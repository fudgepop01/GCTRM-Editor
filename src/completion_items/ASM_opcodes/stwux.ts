import {rS, rA, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "stwux",
  "fullName": "Store Word with Update Indexed",
  "baseHex": "7C00016E",
  "opcode": "011111",
  "parameters": [

    rS,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 183,
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
  "description": "EA is the sum (rA) + (rB). The contents of rS are stored into the word in memory addressed\nby EA.\nEA is placed into rA.\nIf rA = 0, the instruction form is invalid."
}