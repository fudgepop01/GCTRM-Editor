import {rS, rA, d} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "stw",
  "fullName": "Store Word",
  "baseHex": "90000000",
  "opcode": "100100",
  "parameters": [

    rS,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "EA is the sum (rA|0) + d. The contents of rS are stored into the word in memory addressed\nby EA."
}