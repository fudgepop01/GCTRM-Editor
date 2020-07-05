import {frD, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "fabs",
  "fullName": "Floating Absolute Value",
  "baseHex": "FC000210",
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
    value: 264,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    11,
    15
  ],
  "description": "The contents of frB with bit 0 cleared are placed into frD.\nNote that the fabs instruction treats NaNs just like any other kind of value. That is, the sign bit of a\nNaN may be altered by fabs. This instruction does not alter the FPSCR."
}