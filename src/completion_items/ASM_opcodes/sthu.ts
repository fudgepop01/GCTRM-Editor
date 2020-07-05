import {rS, rA, d} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "sthu",
  "fullName": "Store Half Word with Update",
  "baseHex": "B4000000",
  "opcode": "101101",
  "parameters": [

    rS,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "EA is the sum (rA) + d. The contents of the low-order 16 bits of rS are stored into the half\nword in memory addressed by EA.\nEA is placed into rA.\nIf rA = 0, the instruction form is invalid."
}