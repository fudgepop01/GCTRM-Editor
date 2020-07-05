import {crfD, rA, rB} from './instruction';

const pseudocode = `
a = (rA)
b = (rB)
if (a <U b) {
  c = 0b100
}
else if (a >U b) {
  c = 0b010
}
else {
  c = 0b001
}
CR[(4 * crfD)–(4 * crfD + 3)] ¬ c || XER[SO]
`;

export default {
  "mnemonic": "cmpl",
  "fullName": "Compare Logical",
  "baseHex": "7C000040",
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
    value: 32,
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
  "description": "The contents of rA are compared with the contents of rB, treating the operands as unsigned\nintegers. The result of the comparison is placed into CR field crfD.",
  "simple": [{
    "name": "cmpld",
    isSimple(values: number[]) { return values[0] == 0 && values[1] === 1 },
    "equivalent": "cmpl 0, 1, rA, rB",
    "parameters": [rA, rB]
  },
  {
    "name": "cmplw_cr3",
    isSimple(values: number[]) { return values[0] == 3 && values[1] === 0 },
    "equivalent": "cmpl 3, 0, rA, rB",
    "parameters": [rA, rB]
  }]
}