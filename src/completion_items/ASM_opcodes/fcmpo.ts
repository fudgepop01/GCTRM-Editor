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
if (VE == 0) {
  VXVC = 1
}
else if ((frA) is a QNaN or (frB) is a QNaN) {
  VXVC = 1
}
`;

export default {
  "mnemonic": "fcmpo",
  "fullName": "Floating Compare Ordered",
  "baseHex": "FC000040",
  "opcode": "111111",
  "parameters": [

    crfD,
    frA,
    frB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 32,
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
  "description": "The floating-point operand in frA is compared to the floating-point operand in frB. The result of\nthe compare is placed into CR field crfD and the FPCC.\nIf one of the operands is a NaN, either quiet or signaling, then CR field crfD and the FPCC are set\nto reflect unordered. If one of the operands is a signaling NaN, then VXSNAN is set, and if invalid\noperation is disabled (VE = 0) then VXVC is set. Otherwise, if one of the operands is a QNaN, then\nVXVC is set."
}