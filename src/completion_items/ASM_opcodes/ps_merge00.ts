import {frD, frA, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "ps_merge00",
  "fullName": "Paired Single MERGE high",
  "baseHex": "10000420",
  "opcode": "000100",
  "parameters": [

    frD,
    frA,
    frB
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 528,
    bits: [
      21,
      30
    ]
  },
  "reserved": null,
  "description": "ps_merge00. frD,frA,frB (Rc = 1)\n    if HID2[PSE] = 0 then invoke the illegal instruction error handler\n    frD(ps0) ¬ frA(ps0)\n    frD(ps1) ¬ frB(ps0)\nThe floating-point operand in register frA(ps0) is moved to register frD(ps0) and\nfloating-point operand in register frB(ps0) is moved to register frD(ps1)."
}