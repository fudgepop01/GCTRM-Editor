import {rS, rA, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "stwbrx",
  "fullName": "Store Word Byte-Reverse Indexed",
  "baseHex": "7C00052C",
  "opcode": "011111",
  "parameters": [

    rS,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 662,
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
  "description": "EA is the sum (rA|0) + (rB). The contents of the low-order eight bits (24-31) of rS are stored\ninto bits 0–7 of the word in memory addressed by EA. The contents of the subsequent eight\nlow-order bits (16-23) of rS are stored into bits 8–15 of the word in memory addressed by\nEA. The contents of the subsequent eight low-order bits (8-15) of rS are stored into bits 16–23\nof the word in memory addressed by EA. The contents of the subsequent eight low-order bits\n(0-7) of rS are stored into bits 24–31 of the word in memory addressed by EA."
}