import {rS, rA, d} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "stwu",
  "fullName": "Store Word with Update",
  "baseHex": "94000000",
  "opcode": "100101",
  "parameters": [

    rS,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "EA is the sum (rA) + d. The contents of rS are stored into the word in memory addressed by\nEA.\nEA is placed into rA.\nIf rA = 0, the instruction form is invalid."
}