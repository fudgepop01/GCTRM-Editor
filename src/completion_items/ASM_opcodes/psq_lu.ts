import {frD, I, rA, d} from './instruction';

const pseudocode = `
if (HID2[PSE] == 0 || HID2pLSQE == 0) {
  Goto illegial instruction error handler
}
EA = (rA) + EXTS(d)
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
rA = EA
`;

export default {
  "mnemonic": "psq_lu",
  "fullName": "Paired Single Quantized Load with Update, (x’E400 0000’)",
  "baseHex": "E4000000",
  "opcode": "111001",
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
  "description": "PS0 and PS1 in frD are loaded with a pair of single-precision floating-point numbers.\nMemory is accessed at the effective address (EA is the sum (rA) + d) as defined by the\ninstruction. A pair of numbers from memory are converted as defined by the indicated GQR\ncontrol registers and the results are placed into PS0 and PS1. However, if W=1 then only one\nnumber is accessed from memory, converted according to GQR and placed into PS0. PS1 is\nloaded with a floating point value of 1.0.\nThe 3 bit field I selects one of the eight 32 bit GQR control registers. From this register the\nLOAD_SCALE and the LD_TYPE fields are used. The LD_TYPE field defines whether the\ndata in memory is floating point or integer format. If the latter it also defines whether each\ninteger is 8-bits or 16-bits, signed or unsigned. The LOAD_SCALE field is applied only to\ninteger numbers and is a signed integer that is subtracted from the exponent after the integer\nnumber from memory has been converted to floating point format.\n(See Section 2.3.4.3.12 for dequantized operation.)\nThe effective address is placed into rA.\nIf rA = 0, the instruction form is invalid."
}