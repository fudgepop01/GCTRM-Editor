import {rS} from './instruction';

const pseudocode = `
n = spr[5-9] || spr[0-4]
`;

export default {
  "mnemonic": "mtspr",
  "fullName": "Move to Special-Purpose Register",
  "baseHex": "7C0003A6",
  "opcode": "011111",
  "parameters": [

    {
      "label": "SPR",
      "description": "undefined",
      "bits": [
        11,
        20
      ]
    },
    rS
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 467,
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
    name: "mtxer",
    isSimple(values: number[]) { return values[0] === 1 },
    "equivalent": "mtspr 1, rD",
    parameters: [ rS ]
  }, {
    name: "mtlr",
    isSimple(values: number[]) { return values[0] === 8 },
    "equivalent": "mtspr 8, rD",
    parameters: [ rS ]
  }, {
    name: "mtcrtr",
    isSimple(values: number[]) { return values[0] === 9 },
    "equivalent": "mtspr 9, rD",
    parameters: [ rS ]
  }]
}