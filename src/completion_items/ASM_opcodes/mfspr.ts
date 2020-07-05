import {rD} from './instruction';

const pseudocode = `
n = spr[5-9] || spr[0-4]
rD = SPR(n)
`;

export default {
  "mnemonic": "mfspr",
  "fullName": "Move from Special-Purpose Register",
  "baseHex": "7C0002A6",
  "opcode": "011111",
  "parameters": [
    rD,
    {
      "label": "SPR",
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
    value: 339,
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
    name: "mfxer",
    isSimple(values: number[]) { return values[1] === 1},
    parameters: [rD]
  }, {
    name: "mflr",
    isSimple(values: number[]) { return values[1] === 8},
    parameters: [rD]
  }, {
    name: "mfctr",
    isSimple(values: number[]) { return values[1] === 9},
    parameters: [rD]
  }]
}