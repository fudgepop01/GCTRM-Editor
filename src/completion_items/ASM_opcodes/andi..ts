import { rS } from "./instruction";
import { UIMM } from "./instruction";
import { rA } from "./instruction";

const pseudocode = `
rA = (rS) & ((16)0 || UIMM)
`;

export default {
  "mnemonic": "andi.",
  "fullName": "AND Immediate",
  "baseHex": "70000000",
  "opcode": "011100",
  "parameters": [ rA, rS, UIMM ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "The contents of rS are ANDed with 0x000 || UIMM and the result is placed into rA."
}