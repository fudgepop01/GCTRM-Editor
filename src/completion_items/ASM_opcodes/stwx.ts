import {rA, rS, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "stwx",
  "fullName": "Store Word Indexed",
  "baseHex": "7C00012E",
  "opcode": "011111",
  "parameters": [

    rS,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 151,
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
  "description": "EA is the sum (rA|0) + (rB). The contents of rS are stored into the word in memory addressed\nby EA."
}