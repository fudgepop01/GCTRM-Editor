import {frD, frA, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "fdivs",
  "fullName": "Floating Divide Single",
  "baseHex": "EC000024",
  "opcode": "111011",
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
    value: 18,
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
  "description": "The floating-point operand in register frA is divided by the floating-point operand in register\nfrB. The remainder is not supplied as a result.\nIf the most-significant bit of the resultant significand is not a one, the result is normalized. The\nresult is rounded to single-precision under control of the floating-point rounding control field\nRN of the FPSCR and placed into frD.\nFloating-point division is based on exponent subtraction and division of the significands.\nFPSCR[FPRF] is set to the class and sign of the result, except for invalid operation exceptions\nwhen FPSCR[VE] = 1 and zero divide exceptions when FPSCR[ZE] = 1.\nIf the HID2[PSE] = 1 then the quotient is placed in both frD(ps0) and frD(ps1)."
}