import { OPCD , rD, rA, OE, Rc} from './instruction'

const pseudocode = `
rD = (rA) + XER[CA] - 1
`;

export default {
  "mnemonic": "addme",
  "fullName": "Add to Minus One Extended",
  "baseHex": "7C0001D4",
  "opcode": "111110",
  "parameters": [ rD, rA ],
  "modifiers": [ OE, Rc ],
  pseudocode,
  "extension": {
    value: 234,
    bits: [
      22,
      30
    ]
  },
  "reserved": [
    16,
    20
  ],
  "description": "The sum (rA) + XER[CA] + 0xFFFF_FFFF is placed into rD."
}