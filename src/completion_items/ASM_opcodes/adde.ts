import { rD, rA, rB, OE, Rc } from './instruction';

const pseudocode = `
  rD = (rA) + (rB) + XER[CA]
`;

export default {
  "mnemonic": "adde",
  "fullName": "Add Extended",
  "baseHex": "7C000114",
  "opcode": "011111",
  "parameters": [ rD, rA, rB ],
  "modifiers": [ OE, Rc ],
  "pseudocode": pseudocode,
  "extension": {
    value: 138,
    bits: [
      22,
      30
    ]
  },
  "reserved": null,
  "description": "The sum (rA) + (rB) + XER[CA] is placed into rD."
}