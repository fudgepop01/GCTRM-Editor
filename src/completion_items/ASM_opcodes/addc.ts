import { rD, rA, rB, OE, Rc } from './instruction';

const pseudocode = `
  rD = (rA) + (rB)
`;

export default {
  "mnemonic": "addc",
  "fullName": "Add Carrying",
  "baseHex": "7C000014",
  "opcode": "011111",
  "parameters": [ rD, rA, rB ],
  "modifiers": [ OE, Rc ],
  pseudocode,
  "extension": {
    value: 10,
    bits: [
      22,
      30
    ]
  },
  "reserved": null,
  "description": "The sum (rA) + (rB) is placed into rD."
}