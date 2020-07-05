import {frS, I, rA, d} from './instruction';

const pseudocode = `
if (HID2[PSE] == 0 || HID2[LSQE] == 0) {
  Goto illegial instruction error handler
}
EA = (rA) + EXTS(d)
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
  MEM(EA,c) = dequantized(frS(ps0),stt,sts)
  MEM(EA+c,c) = dequantized(frS(ps1),stt,sts)
}
else {
  MEM(EA,c) = dequantized(frS(ps0),stt,sts)
}
rA = EA
`;

export default {
  "mnemonic": "psq_stu",
  "fullName": "Paired Single Quantized Store with update, (x’ F400 0000’)",
  "baseHex": "F4000000",
  "opcode": "111101",
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
  "description": "The effective address is the sum of (rA) + d as defined by the instruction. If W=1 only one\nfloating point number from frS(ps0) is quantized and stored to memory starting at the\neffective address. If W=0 a pair of floating point numbers from frS(ps0) and frS(ps1) are\nquantized and stored to memory starting at the effective address.\nThe 3 bit field I selects one of the eight 32 bit GQR control registers. From this register the\nSTORE_SCALE and the ST_TYPE fields are used. The ST_TYPE field defines whether the\ndata stored to memory is to be floating-point or integer format. If the latter it also defines\nwhether each integer is 8-bits or 16-bits, signed or unsigned. The STORE_SCALE field is a\nsigned integer that is added to the exponent of the floating point number before it is converted\nto integer and stored to memory.\nFor floating point numbers stored to memory the addition of the STORE_SCALE field to the\nexponent field does not take place. (See Section 2.3.4.3.12 for dequantized operation.)\nThe effective address is placed into register rA.\nIf rA = 0, the instruction form is invalid."
}