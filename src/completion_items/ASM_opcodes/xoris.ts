import {rA, rS, UIMM} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "xoris",
  "fullName": "XOR Immediate Shifted",
  "baseHex": "6C000000",
  "opcode": "011011",
  "parameters": [

    rA,
    rS,
    UIMM
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "The contents of rS are XORed with UIMM || 0x0000 and the result is placed into rA."
}