import {rD, rA, rB, OE, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "subfe",
  "fullName": "Subtract from Extended",
  "baseHex": "7C000110",
  "opcode": "011111",
  "parameters": [

    rD,
    rA,
    rB
  ],
  "modifiers": [
    OE,
    Rc
  ],
  pseudocode,
  "extension": {
    value: 136,
    bits: [
      22,
      30
    ]
  },
  "reserved": null,
  "description": "The sum ¬ (rA) + (rB) + XER[CA] is placed into rD."
}