import {rD} from './instruction';

const pseudocode = `
rD = MSR
`;

export default {
  "mnemonic": "mftb",
  "fullName": "Move from Time Base",
  "baseHex": "7C0002E6",
  "opcode": "011111",
  "parameters": [

    rD,
    {
      "label": "mftb",
      "description": "undefined",
      "bits": [
        11,
        20
      ]
    }
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 371,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    31
  ],
  "description": "---",
  "simple": [{
    name: "mftb",
    isSimple(values: number[]) { return values[1] === 268},
    parameters: [rD]
  }, {
    name: "mftbur",
    isSimple(values: number[]) { return values[1] ===  269},
    parameters: [rD]
  }]
}