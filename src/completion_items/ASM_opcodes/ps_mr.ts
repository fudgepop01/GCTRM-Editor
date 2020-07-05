import {frD, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "ps_mr",
  "fullName": "Paired Single Move Register",
  "baseHex": "10000090",
  "opcode": "000100",
  "parameters": [

    frD,
    frB
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 72,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    [
      11,
      15
    ]
  ],
  "description": "ps_mr. frD,frB (Rc = 1)\n    If HID2[PSE] = 0 then invoke the illegal instruction error handler\n    frD(ps0) ¬ frB(ps0)\n    frD(ps1) ¬ frB(ps1)\nThe contents of register frB(ps0) are placed into frD(ps0).\nThe contents of register frB(ps1) are placed into frD(ps1)."
}