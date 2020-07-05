import {frD, I, rA, d} from './instruction';

const pseudocode = `
if (HID2[PSE] == 0 || HID2pLSQE == 0) {
  Goto illegial instruction error handler
}
if (rA == 0) {
  b = 0
}
else {
  b = (rA)
}
EA = b + EXTS(d)
lt = qrI[LD_TYPE]
ls = qrI[LD_SCALE]
c = 4
if (lt == 4 || lt == 6) {
  c = 10
}
if (lt == 5 || lt == 7) {
  c = 20
}
if (w == 0) {
  frD(ps0) = dequantized(MEM(EA,c),lt,ls)
  frD(ps1) = dequantized(MEM(EA,c+c),lt,ls)
}
else {
  frD(ps0) = dequantized(MEM(EA,c),lt,ls)
  frD(ps1) = 1.0
}
`;

export default {
  "mnemonic": "psq_l",
  "fullName": "Paired Single Quantized Load, (x’E000 0000’)",
  "baseHex": "E0000000",
  "opcode": "111000",
  "parameters": [

    frD,
    rA,
    d(0),
    {
      label: "W",
      description: "unknown",
      bits: [ 16 ]
    },
    I(0)
  ],
  "modifiers": [
    I(0)
  ],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "if HID2[PSE] = 0 | HID2[LSQE] = 0 then Goto illegal instruction error handler\n    if rA = 0\n    then b ¬ 0\n    else b ¬ (rA)\n    EA ¬ b + EXTS(d)\n    lt ¬ qrI[LD_TYPE]\n    ls ¬ qrI[LD_SCALE]\n    c ¬ 4\n    if lt = (4|6) then c ¬ 10\n    if lt = (5|7) then c ¬ 20\n    if W = 0\n    then\n    frD(ps0) ¬ dequantized(MEM(EA,c),lt,ls)\n    frD(ps1) ¬ dequantized(MEM(EA+c,c),lt,ls)\n    else\n    frD(ps0) ¬ dequantized(MEM(EA,c),lt,ls)\n    frD(ps1) ¬ 1.0\nPS0 and PS1 in frD are loaded with a pair of single precision floating point numbers.\nMemory is accessed at the effective address (EA is the sum (rA|0) + d) as defined by the\ninstruction. A pair of numbers from memory are converted as defined by the indicated GQR\ncontrol registers and the results are placed into PS0 and PS1. However, if W=1 then only\none number is accessed from memory, converted according to GQR and placed into PS0.\nPS1 is loaded with a floating point value of 1.0.\nThe 3 bit field I selects one of the eight 32 bit GQR control registers. From this register the\nLOAD_SCALE and the LD_TYPE fields are used. The LD_TYPE field defines whether\nthe data in memory is floating point or integer format. If the latter it also defines whether\neach integer is 8-bits or 16-bits, signed or unsigned. The LOAD_SCALE field is applied\nonly to integer numbers and is a signed integer that is subtracted from the exponent after\nthe integer number from memory has been converted to floating point format."
}