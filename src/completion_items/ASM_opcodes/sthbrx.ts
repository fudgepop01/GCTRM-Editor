import {rS, rA, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "sthbrx",
  "fullName": "Store Half Word Byte-Reverse Indexed",
  "baseHex": "7C00072C",
  "opcode": "011111",
  "parameters": [

    rS,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 918,
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
  "description": "EA is the sum (rA|0) + (rB). The contents of the low-order eight bits (24-31) of rS are stored\ninto bits 0–7 of the half word in memory addressed by EA. The contents of the subsequent\nlow-order eight bits (16-23) of rS are stored into bits 8–15 of the half word in memory\naddressed by EA."
}