import {rD, rA, rB, OE, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "subf",
  "fullName": "Subtract From",
  "baseHex": "7C000050",
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
    value: 40,
    bits: [
      22,
      30
    ]
  },
  "reserved": null,
  "description": "The sum ¬ (rA) + (rB) + 1 is placed into rD. (equivlent to (rB)--(rA))\nThe subf instruction is preferred for subtraction because it sets few status bits.",
  "simple": [{
    name: "sub",
    isSimple(value: number[]) {return true },
    "equivalent": "subf rD, rB, rA",
    parameters: [ rD, rA, rB ]
  }]
}