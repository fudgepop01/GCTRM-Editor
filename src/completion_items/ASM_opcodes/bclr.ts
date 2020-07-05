import {BO, BI, LK} from './instruction';

const pseudocode = `
if (¬ BO[2]) {
  CTR = CTR - 1
}
ctr_ok = BO[2] | ((CTR ≠ 0) ⊕ BO[3])
cond_ok = BO[0] | (CR[BI] = BO[1])
if (ctr_ok && cond_ok) {
  NIA <=iea LR[0-29] || 0b00
  if (LK) {
    LR <=iea CIA + 4
  }
}
`;

export default {
  "mnemonic": "bclr",
  "fullName": "Branch Conditional to Link Register",
  "baseHex": "4C000020",
  "opcode": "010011",
  "parameters": [

    BO,
    BI
  ],
  "modifiers": [
    LK
  ],
  pseudocode,
  "extension": {
    value: 16,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    16,
    20
  ],
  "description": "The BI field specifies the bit in the condition register to be used as the condition of the branch. The\nBO field is encoded as described in Table 12-8. Additional information about BO field encoding is\nprovided in Section 4.2.4.2, “Conditional Branch Control,” in the PowerPC Microprocessor\nFamily: The Programming Environments manual.",
  "simple": [{
    "name": "bltlr",
    isSimple(values: number[]) { return values[0] == 12 && values[1] === 0 },
    "parameters": []
  },
  {
    "name": "bnelrcr2",
    isSimple(values: number[]) { return values[0] == 4 && values[1] === 10 },
    "parameters": []
  },
  {
    "name": "bdnzlr",
    isSimple(values: number[]) { return values[0] == 16 && values[1] === 0 },
    "parameters": []
  }]
}