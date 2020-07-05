import {CRM, rS} from './instruction';

const pseudocode = `
mask = (4)(CRM[0]) || (4)(CRM[1]) ||... (4)(CRM[7])
CR = (rS & mask) | (CR & ¬ mask)
`;

export default {
  "mnemonic": "mtcrf",
  "fullName": "Move to Condition Register Fields",
  "baseHex": "7C000120",
  "opcode": "011111",
  "parameters": [

    CRM,
    rS
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 144,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    [
      11
    ],
    [
      20
    ],
    [
      31
    ]
  ],
  "description": "The contents of rS are placed into the condition register under control of the field mask\nspecified by CRM. The field mask identifies the 4-bit fields affected. Let i be an integer in the\nrange 0–7. If CRM(i) = 1, CR field i (CR bits 4 * i through 4 * i + 3) is set to the contents of\nthe corresponding field of rS.\nNOTE: Updating a subset of the eight fields of the condition register may have substantially\npoorer performance on some implementations than updating all of the fields.",
  "simple": [{
    name: "mtcr",
    isSimple(values: number[]) { values[0] == 0xFF },
    parameters: [ rS ]
  }]
}