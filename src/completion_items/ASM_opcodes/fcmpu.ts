import {crfD, frA, frB} from './instruction';

const pseudocode = `
if ((frA) is a NaN or (frB) is a NaN) {
  c = 0b0001
}
else if ((frA) < (frB)) {
  c = 0b1000
}
else if ((frA) > (frB)) {
  c = 0b0100
}
else {
  c = 0b0010
}
FPCC = c
CR[(4 * crfD)-(4 * crfD + 3)] = c

if ((frA) is an SNaN or (frB) is an SNaN) {
  VXSNAN = 1
}
`;

export default {
  "mnemonic": "fcmpu",
  "fullName": "Floating Compare Unordered",
  "baseHex": "FC000000",
  "opcode": "111111",
  "parameters": [

    crfD,
    frA,
    frB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 0,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    [
      9,
      10
    ],
    [
      31
    ]
  ],
  "description": "The floating-point operand in register frA is compared to the floating-point operand in register frB.\nThe result of the compare is placed into CR field crfD and the FPCC.\nIf one of the operands is a NaN, either quiet or signaling, then CR field crfD and the FPCC are set to\nreflect unordered. If one of the operands is a signaling NaN, then VXSNAN is set."
}