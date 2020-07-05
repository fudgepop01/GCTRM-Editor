import {frD, frA, frC, frB, Rc} from './instruction';

const pseudocode = `
frD = [frA * frC] - frB
`;

export default {
  "mnemonic": "fmsub",
  "fullName": "Floating Multiply-Subtract (Double-Precision)",
  "baseHex": "FC000038",
  "opcode": "111111",
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
    value: 28,
    bits: [
      26,
      30
    ]
  },
  "reserved": null,
  "description": "The floating-point operand in register frA is multiplied by the floating-point operand in\nregister frC. The floating-point operand in register frB is subtracted from this intermediate\nresult.\nIf the most-significant bit of the resultant significand is not a one, the result is normalized. The\nresult is rounded to double-precision under control of the floating-point rounding control field\nRN of the FPSCR and placed into frD.\nFPSCR[FPRF] is set to the class and sign of the result, except for invalid operation exceptions\nwhen FPSCR[VE] = 1."
}