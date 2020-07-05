import {frD, rA, d} from './instruction';

const pseudocode = `
if (rA == 0) {
  b = 0
}
else (
  b = (rA)
)
EA = b + EXTS(d)
if (HID2[PSE] == 0) {
  frD = DOUBLE(MEM(EA, 4))
}
else {
  frD(ps0) = Single(MEM(EA, 4))
  frD(ps1) = Single(MEM(EA, 4))
}
`;

export default {
  "mnemonic": "lfs",
  "fullName": "Load Floating-Point Single",
  "baseHex": "C0000000",
  "opcode": "110000",
  "parameters": [

    frD,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "The word in memory addressed by EA is interpreted as a floating-point single-precision\noperand.\nIf HID2[PSE] = 0 then this word is converted to floating-point double-precision and placed\ninto frD.\nIf HID2[PSE] = 1 then this word is interpreted as a floating-point single-precision operand\nand placed into frD(ps0) and replicated in frD(ps1)."
}