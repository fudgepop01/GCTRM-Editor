import {frS, I, rA, d} from './instruction';

const pseudocode = `
if (HID2[PSE] == 0 || HID2[LSQE] == 0) {
  Goto illegial instruction error handler
}
if (rA == 0) {
  b = 0
}
else {
  b = (rA)
}
EA = b + EXTS(d)
stt = qrI[LD_TYPE]
sts = qrI[LD_SCALE]
c = 4
if (lt == 4 || lt == 6) {
  c = 10
}
if (lt == 5 || lt == 7) {
  c = 20
}
if (W == 0) {
  frD(ps0) = dequantized(frS(ps0),stt,sts)
  frD(ps1) = dequantized(frS(ps1),stt,sts)
}
else {
  frD(ps0) = dequantized(frS(ps0),stt,sts)
}
`;

export default {
  "mnemonic": "psq_st",
  "fullName": "Paired Single Quantized Store, (x’F000 0000’)",
  "baseHex": "F0000000",
  "opcode": "111100",
  "parameters": [

    frS,
    rA,
    d(1),
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
  "description": "The effective address is the sum of (rA|0) + d as defined by the instruction. If W=1 only\none floating point number from frS(ps0) is quantized and stored to memory starting at the\neffective address. If W=0 a pair of floating point numbers from frS(ps0) and frS(ps1) are\nquantized and stored to memory starting at the effective address.\nThe 3 bit field I selects one of the eight 32 bit GQR control registers. From this register the\nSTORE_SCALE and the ST_TYPE fields are used. The ST_TYPE field defines whether\nthe data stored to memory is to be floating-point or integer format. If the latter it also defines\nwhether each integer is 8-bits or 16-bits, signed or unsigned. The STORE_SCALE field is\na signed integer that is added to the exponent of the floating point number before it is\nconverted to integer and stored to memory.\n(See Section 2.3.4.3.12 for dequantized operation.)\nFor floating point numbers stored to memory the addition of the STORE_SCALE field to\nthe exponent does not take place."
}