import { rD, rA, rB, OE, Rc} from './instruction';

const pseudocode = `
  rD = (rA) + (rB)
`;

export default {
  "mnemonic": "add",
  "fullName": "Add",
  "baseHex": "7C000214",
  "opcode": "011111",
  "parameters": [ rD, rA, rB ],
  "modifiers": [ OE, Rc ],
  pseudocode,
  "extension": {
    value: 266,
    bits: [
      22,
      30
    ]
  },
  "reserved": null,
  "description": "The sum (rA) + (rB) is placed into rD.\nThe add instruction is preferred for addition because it sets few status bits."
}