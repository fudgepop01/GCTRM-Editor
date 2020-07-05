import {crfD, frA, frB} from './instruction';

const pseudocode = `
if (HID2[PSE] == 0) {
  Goto illegal instruction error handler
}
if (frA(ps0) is NaN || frB(ps0) is NaN) {
  c = 0b0001
}
else if (frA(ps0) < frB(ps0)) {
  c = 0b1000
}
else if (frA(ps0) > frB(ps0)) {
  c = 0b0100
}
else {
  c = 0b0010
}
FPCC = c
CR[(4 * crfD),(4 * crfD + 3)] = c
if (frA(ps0) is SNaN || frB(ps0) is SNaN) {
  VXSNAN = 1
}
`;

export default {
  "mnemonic": "ps_cmpu0",
  "fullName": "Paired Singles Compare Unordered High",
  "baseHex": "10000000",
  "opcode": "000100",
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
  "description": "The floating-point operand in frA(ps0) is compared to the floating-point operand in\nfrB(ps0). The result of the compare is placed into CR field crfD and the FPCC\nIf one of the operands is a NaN, either quiet or signaling, then CR field crfD and the FPCC\nare set to reflect unordered. If one of the operands is a signaling NaN, then VXSNAN is set."
}