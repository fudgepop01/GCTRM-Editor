import {frA, frD, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "ps_merge10",
  "fullName": "Paired Single MERGE swapped(x’1000 04A0’)",
  "baseHex": "100004A0",
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
    value: 592,
    bits: [
      21,
      30
    ]
  },
  "reserved": null,
  "description": "ps_merge10. frD,frA,frB (Rc = 1)\n    if HID2[PSE] = 0 then invoke the illegal instruction error handler\n    frD(ps0) ¬ frA(ps1)\n    frD(ps1) ¬ frB(ps0)\nThe floating-point operand in register frA(ps1) is moved to register frD(ps0) and\nfloating-point operand in register frB(ps0) is moved to register frD(ps1)."
}