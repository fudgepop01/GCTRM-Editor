import {frD, frB, Rc} from './instruction';

const pseudocode = `
if (HID2[PSE] == 0) {
  frD = estimate[ 1/frB]
}
else {
  frD(ps0) = estimate[ 1/frB(ps0)]
  frD(ps1) = frD(ps0)
}
`;

export default {
  "mnemonic": "fres",
  "fullName": "Floating Reciprocal Estimate Single",
  "baseHex": "EC000030",
  "opcode": "111011",
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
      25
    ]
  ],
  "description": "A single-precision estimate of the reciprocal of the floating-point operand in register frB is\nplaced into register frD. The estimate placed into register frD is correct to a precision of one\npart in 4096 of the reciprocal of frB.\n(gekko_user_manual p.416)"
}