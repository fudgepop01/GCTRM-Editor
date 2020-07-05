import {frD, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "fnabs",
  "fullName": "Floating Negative Absolute Value",
  "baseHex": "FC000110",
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
    value: 136,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    11,
    15
  ],
  "description": "The contents of register frB with bit 0 set are placed into frD.\nNote that the fnabs instruction treats NaNs just like any other kind of value. That is, the sign\nbit of a NaN may be altered by fnabs. This instruction does not alter the FPSCR."
}