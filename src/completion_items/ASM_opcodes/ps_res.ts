import {frB, Rc, frD} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "ps_res",
  "fullName": "Paired Single Reciprocal Estimate",
  "baseHex": "10000030",
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
    value: 24,
    bits: [
      26,
      30
    ]
  },
  "reserved": [
    [
      11,
      15
    ],
    [
      21,
      15
    ]
  ],
  "description": "A single-precision estimate of the reciprocal of the floating-point operand in register\nfrB(ps0) is placed into register frD(ps0) and a single-precision estimate of the reciprocal\nof the floating-point operand in register frB(ps1) is placed into register frD(ps1). These\nestimates placed into register frD(ps0) and frD(ps1) are correct to a precision of one part\nin 4096 of the reciprocal of frB(ps0) and frB(ps1), respectively."
}