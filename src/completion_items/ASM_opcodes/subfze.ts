import {rD, rA, OE, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "subfze",
  "fullName": "Subtract from Zero Extended",
  "baseHex": "7C000190",
  "opcode": "011111",
  "parameters": [

    rD,
    rA
  ],
  "modifiers": [
    OE,
    Rc
  ],
  pseudocode,
  "extension": {
    value: 200,
    bits: [
      22,
      30
    ]
  },
  "reserved": [
    [
      16,
      20
    ]
  ],
  "description": "The sum ¬ (rA) + XER[CA] is placed into rD."
}