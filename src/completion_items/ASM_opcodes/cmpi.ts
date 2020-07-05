import {crfD, rA, SIMM} from './instruction';

const pseudocode = `
a = rA
if (a < (SIMM)) {
  c = 0b100
}
else if (a > EXTS(SIMM)) {
  c = 0b010
}
else {
  c = 0b001
}
CR[(4 * crfD)–(4 * crfD + 3)] = c || XER[SO]
`;

export default {
  "mnemonic": "cmpi",
  "fullName": "Compare Immediate",
  "baseHex": "2C000000",
  "opcode": "001011",
  "parameters": [

    crfD,
    {
      label: "L",
      description: "unknown",
      bits: [10]
    },
    rA,
    SIMM
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": [
    9
  ],
  "description": "The contents of rA are compared with the sign-extended value of the SIMM field, treating the\noperands as signed integers. The result of the comparison is placed into CR field crfD.",
  "simple": [{
    "name": "cmpdi",
    isSimple(values: number[]) { return values[0] == 0 && values[1] === 1 },
    "equivalent": "cmpi 0, 1, rA, SIMM",
    "parameters": [ rA, SIMM ]
  },
  {
    "name": "cmpwi_cr3",
    isSimple(values: number[]) { return values[0] == 3 && values[1] === 0 },
    "equivalent": "cmpi 3, 0, rA, SIMM",
    "parameters": [ rA, SIMM ]
  }]
}