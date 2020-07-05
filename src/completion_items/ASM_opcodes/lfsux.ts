import {frD, rA, rB} from './instruction';

const pseudocode = `
EA = (rA) + (rB)
if (HID2[PSE] == 0) {
  frD = DOUBLE(MEM(EA, 4))
}
else {
  frD(ps0) = Single(MEM(EA, 4))
  frD(ps1) = Single(MEM(EA, 4))
}
rA = EA
`;

export default {
  "mnemonic": "lfsux",
  "fullName": "Load Floating-Point Single with Update Indexed",
  "baseHex": "7C00046E",
  "opcode": "011111",
  "parameters": [

    frD,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 567,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    [
      31
    ]
  ],
  "description": "EA is the sum (rA) + d.\nThe word in memory addressed by EA is interpreted as a floating-point single-precision\noperand.\nIf HID2[PSE] = 0 then this word is converted to floating-point double-precision (see\nSection D.6, “Floating-Point Load Instructions,” in The Programming Environments Manual)\nand placed into frD.\nIf HID2[PSE] = 1 then this word is interpreted as a floating-point single-precision operand\nand placed into frD(ps0) and replicated in frD(ps1).\nEA is placed into rA.\nIf rA = 0, the instruction form is invalid."
}