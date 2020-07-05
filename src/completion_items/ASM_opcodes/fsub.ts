import {frD, frA, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "fsub",
  "fullName": "Floating Subtract (Double-Precision)",
  "baseHex": "FC00 0028",
  "opcode": "111111",
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
    value: 20,
    bits: [
      26,
      30
    ]
  },
  "reserved": [
    [
      21,
      25
    ]
  ],
  "description": "The floating-point operand in register frB is subtracted from the floating-point operand in\nregister frA. If the most-significant bit of the resultant significand is not a one, the result is\nnormalized. The result is rounded to double-precision under control of the floating-point\nrounding control field RN of the FPSCR and placed into frD.\nThe execution of the fsub instruction is identical to that of fadd, except that the contents of\nfrB participate in the operation with its sign bit (bit 0) inverted.\nFPSCR[FPRF] is set to the class and sign of the result, except for invalid operation exceptions\nwhen FPSCR[VE] = 1."
}