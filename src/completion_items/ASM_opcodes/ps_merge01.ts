import {frD, frA, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "ps_merge01",
  "fullName": "Paired Single MERGE direct(x’1000 0460’)",
  "baseHex": "10000460",
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
    value: 560,
    bits: [
      21,
      30
    ]
  },
  "reserved": null,
  "description": "ps_merge01. frD,frA,frB (Rc = 1)\n    if HID2[PSE] = 0 then invoke the illegal instruction error handler\n    frD(ps0) ¬ frA(ps0)\n    frD(ps1) ¬ frB(ps1)\nThe floating-point operand in register frA(ps0) is moved to register frD(ps0) and\nfloating-point operand in register frB(ps1) is moved to register frD(ps1)."
}