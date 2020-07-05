import {rA, rS, UIMM} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "xori",
  "fullName": "XOR Immediate",
  "baseHex": "68000000",
  "opcode": "011010",
  "parameters": [

    rA,
    rS,
    UIMM
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "The contents of rS are XORed with 0x0000 || UIMM and the result is placed into rA."
}