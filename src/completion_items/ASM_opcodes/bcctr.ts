import {BO, BI, LK} from './instruction';

const pseudocode = `
cond_ok = BO[0] | (CR[BI] ≡ BO[1])
if (cond_ok) {
  NIA <=iea CTR || 0b00
  if (LK) {
    LR <=iea CIA + 4
  }
}
`;

export default {
  "mnemonic": "bcctr",
  "fullName": "Branch Conditional to Count Register",
  "baseHex": "4C000420",
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
    value: 528,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    16,
    20
  ],
  "description": "The BI field specifies the bit in the condition register to be used as the condition of the branch. The\nBO field is encoded as described in Table 12-7. Additional information about BO field encoding is\nprovided in Section 4.2.4.2, “Conditional Branch Control,” in the PowerPC Microprocessor\nFamily: The Programming Environments manual.",
  "simple": [{
    "name": "bltctr",
    isSimple(values: any) { return values[0] == 12 && values[1] === 0 },
    "equivalent": "bcctr 12, 0",
    "parameters": []
  },
  {
    "name": "bnectrcr2",
    isSimple(values: any) { return values[0] == 4 && values[1] === 10 },
    "equivalent": "bcctr 4, 10",
    "parameters": []
  }]
}