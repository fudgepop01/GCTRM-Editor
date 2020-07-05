import {crfD, rA, rB} from './instruction';

const pseudocode = `
a = (rA)
b = (rB)
if (a < b) {
  c = 0b100
}
else if (a > b) {
  c = 0b010
}
else {
  c = 0b001
}
CR[(4 * crfD) - (4 * crfD + 3)] = c || XER[SO]
`;

export default {
  "mnemonic": "cmp",
  "fullName": "Compare",
  "baseHex": "7C000000",
  "opcode": "011111",
  "parameters": [

    crfD,
    {
      label: "L",
      description: "unknown",
      bits: [10]
    },
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 0,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    [
      9
    ],
    [
      31
    ]
  ],
  "description": "The contents of rA are compared with the contents of rB, treating the operands as signed integers.\nThe result of the comparison is placed into CR field crfD.\nIf L = 1 the instruction form is invalid.",
  "simple": [{
    "name": "cmpd",
    isSimple(values: number[]) { return values[0] == 0 && values[1] === 1 },
    "parameters": [rA, rB]
  },
  {
    "name": "cmpwcr3",
    isSimple(values: number[]) { return values[0] == 3 && values[1] === 0 },
    "parameters": [rA, rB]
  }]
}