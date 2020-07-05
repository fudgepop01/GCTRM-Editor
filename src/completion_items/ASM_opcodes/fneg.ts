import {frD, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "fneg",
  "fullName": "Floating Negate",
  "baseHex": "FC000050",
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
    value: 40,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    11,
    15
  ],
  "description": "The contents of register frB with bit 0 inverted are placed into frD.\nNote that the fneg instruction treats NaNs just like any other kind of value. That is, the sign\nbit of a NaN may be altered by fneg. This instruction does not alter the FPSCR."
}