import {frD, frA, frC, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "ps_sum0",
  "fullName": "Paired Single vector SUM high",
  "baseHex": "10000014",
  "opcode": "000100",
  "parameters": [

    frD,
    frA,
    frC,
    frB
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 10,
    bits: [
      26,
      30
    ]
  },
  "reserved": null,
  "description": "ps_sum0. frD,frA,frC,frB (Rc = 1)\n    if HID2[PSE] = 0 then invoke the illegal instruction error handler\n    frD(ps0) ¬ frA(ps0) + frB(ps1)\n    frD(ps1) ¬ frC(ps1)\nThe floating-point operand in register frA(ps0) is added to the floating-point operand from\nregister frB(ps1). If the most-significant bit of the resultant significand is not a one, the result\nis normalized. The result is rounded to single-precision under control of the floating-point\nrounding control field RN of the FPSCR and placed into frD(ps0).\nThe floating-point operand in register frC(ps1) is placed into frD(ps1).\nFPSCR[FPRF] is set to the class and sign of the ps0 result, except for invalid operation\nexceptions when FPSCR[VE] = 1."
}