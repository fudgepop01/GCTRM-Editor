import {frS, rB, I, rA} from './instruction';

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
EA = b + (rB)
stt = qrI[LD_TYPE]
sts = qrI[LD_SCALE]
c = 4
if (stt == 4 || stt == 6) {
  c = 10
}
if (stt == 5 || stt == 7) {
  c = 20
}
if (W == 0) {
  MEM(EA,c) = quantized(frS(ps0),stt,sts)
  MEM(EA+c,c) = quantized(frS(ps1),stt,sts)
}
else {
  MEM(EA,c) = quantized(frS(ps0),stt,sts)
}
`;

export default {
  "mnemonic": "psq_stx",
  "fullName": "Paired Single Quantized Store Indexed, (x’1000 000E’)",
  "baseHex": "1000000E",
  "opcode": "000100",
  "parameters": [

    frS,
    rA,
    rB,
    {
      label: "W",
      description: "unknown",
      bits: [ 21 ]
    },
    I(1)
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 7,
    bits: [
      25,
      30
    ]
  },
  "reserved": null,
  "description": "The effective address is the sum of (rA|0) + (rB) as defined by the instruction. If W=1 only\none floating point number from frS(ps0) is quantized and stored to memory starting at the\neffective address. If W=0 a pair of floating point numbers from frS(ps0) and frS(ps1) are\nquantized and stored to memory starting at the effective address.\nThe 3 bit field I selects one of the eight 32 bit GQR control registers. From this register the\nSTORE_SCALE and the ST_TYPE fields are used. The ST_TYPE field defines whether the\ndata stored to memory is to be floating-point or integer format. If the latter it also defines\nwhether each integer is 8-bits or 16-bits, signed or unsigned. The STORE_SCALE field is a\nsigned integer that is added to the exponent of the floating point number before it is converted\nto integer and stored to memory.\n(See Section 2.3.4.3.12 for dequantized operation.)\nFor floating point numbers stored to memory the addition of the STORE_SCALE field to the\nexponent field does not take place."
}