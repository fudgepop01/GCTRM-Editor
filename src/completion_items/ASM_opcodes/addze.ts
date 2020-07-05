import { rD, rA, OE, Rc} from "./instruction";

const pseudocode = `
rD = (rA) + XER[CA]
`;

export default {
  "mnemonic": "addze",
  "fullName": "Add to Zero Extended",
  "baseHex": "7C000194",
  "opcode": "011111",
  "parameters": [ rD, rA ],
  "modifiers": [ OE, Rc ],
  pseudocode,
  "extension": {
    value: 202,
    bits: [
      22,
      30
    ]
  },
  "reserved": [
    16,
    20
  ],
  "description": "The sum (rA) + XER[CA] is placed into rD."
}