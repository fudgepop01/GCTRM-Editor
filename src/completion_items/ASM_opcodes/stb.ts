import {rS, rA, d} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "stb",
  "fullName": "Store Byte",
  "baseHex": "98000000",
  "opcode": "100110",
  "parameters": [

    rS,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "EA is the sum (rA|0) + d. The contents of the low-order eight bits of rS are stored into the\nbyte in memory addressed by EA."
}