import {rS, rA, d} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "sth",
  "fullName": "Store Half Word",
  "baseHex": "B0000000",
  "opcode": "101100",
  "parameters": [

    rS,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "EA is the sum (rA|0) + d. The contents of the low-order 16 bits of rS are stored into the half\nword in memory addressed by EA."
}