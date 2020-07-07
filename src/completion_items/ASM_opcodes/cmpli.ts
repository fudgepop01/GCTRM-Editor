import {crfD, rA, UIMM} from './instruction';

const pseudocode = `
a = (rA)
if (a <U ((16)0 || UIMM)) {
  c = 0b100
}
else if (a >U ((16)0 || UIMM)) {
  c = 0b010
}
else {
  c = 0b001
}
CR[(4 * crfD)–(4 * crfD + 3)] ¬ c || XER[SO]
`;

export default {
  "mnemonic": "cmpli",
  "fullName": "Compare Logical Immediate",
  "baseHex": "28000000",
  "opcode": "001010",
  "parameters": [

    crfD,
    {
      label: "L",
      description: "unknown",
      bits: [10]
    },
    rA,
    UIMM
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": [
    9
  ],
  "description": "The contents of rA are compared with 0x0000 || UIMM, treating the operands as unsigned integers.\nThe result of the comparison is placed into CR field crfD.",
  "simple": [{
    "name": "cmpldi",
    isSimple(values: number[]) { return values[0] == 0 && values[1] === 1 },
    "equivalent": "cmpli 0, 1, rA, UIMM",
    "parameters": [ rA, UIMM ]
  },
  {
    "name": "cmplwi",
    isSimple(values: number[]) { return values[0] == 3 && values[1] === 0 },
    "equivalent": "cmpli 3, 0, rA, UIMM",
    "parameters": [ rA, UIMM ]
  }]
}