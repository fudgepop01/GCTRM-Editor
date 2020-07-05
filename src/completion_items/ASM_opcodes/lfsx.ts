import {frD, rA, rB} from './instruction';

const pseudocode = `
if (rA == 0) {
  b = 0
}
else {
  b = rA
}
EA = b + (rB)
if (HID2[PSE] == 0) {
  frD = DOUBLE(MEM(EA, 4))
}
else {
  frD(ps0) = Single(MEM(EA, 4))
  frD(ps1) = Single(MEM(EA, 4))
}
`;

export default {
  "mnemonic": "lfsx",
  "fullName": "Load Floating-Point Single Indexed",
  "baseHex": "7C00042E",
  "opcode": "011111",
  "parameters": [

    frD,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 535,
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
  "description": "EA is the sum (rA|0) + (rB).\nThe word in memory addressed by EA is interpreted as a floating-point single-precision\noperand.\nIf HID2[PSE] = 0 then this word is converted to floating-point double-precision and placed\ninto frD.\nIf HID2[PSE] = 1 then this word is interpreted as a floating-point single-precision operand\nand placed into frD(ps0) and replicated in frD(ps1)."
}