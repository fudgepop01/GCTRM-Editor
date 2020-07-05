import { rA, rS, rB, Rc } from "./instruction";

const pseudocode = `
rA = (rS) & (rB)
`;

export default {
  "mnemonic": "and",
  "fullName": "AND",
  "baseHex": "7C000038",
  "opcode": "011111",
  "parameters": [ rA, rS, rB, Rc ],
 "modifiers": [ Rc ],
  pseudocode,
  "extension": {
    value: 28,
    bits: [
      21,
      30
    ]
  },
  "reserved": null,
  "description": "The contents of rS are ANDed with the contents of rB and the result is placed into rA."
}