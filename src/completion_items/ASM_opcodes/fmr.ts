import {frD, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "fmr",
  "fullName": "Floating Move Register(Double-Precision)",
  "baseHex": "FC000090",
  "opcode": "111111",
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
    11,
    15
  ],
  "description": "The content of register frB is placed into frD.\nWhen HID2[PSE] = 1 and the content in frB is a double-precision floating point operand,\nthen the operand is copied to frD.\nWhen HID2[PSE] = 1 and the content of frB contains a paired-single floating-point\noperand, the frB[ps0] is copied to frD[ps0] and the content of frD[ps1] is unchanged."
}