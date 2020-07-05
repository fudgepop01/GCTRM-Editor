import {rA, rS, UIMM} from './instruction';

const pseudocode = `
rA = (rS) & (UIMM || (16)0)
`;

export default {
  "mnemonic": "andis.",
  "fullName": "AND Immediate Shifted",
  "baseHex": "74000000",
  "opcode": "011101",
  "parameters": [ rA, rS, UIMM ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "The contents of rS are ANDed with UIMM || 0x0000 and the result is placed into rA."
}