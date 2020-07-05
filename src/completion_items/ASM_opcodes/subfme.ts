import {rD, rA, OE, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "subfme",
  "fullName": "Subtract from Minus One Extended",
  "baseHex": "7C0001D0",
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
    value: 232,
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
  "description": "The sum ¬ (rA) + XER[CA] + (32)1 is placed into rD."
}