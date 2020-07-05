import {frD, rB, I, rA} from './instruction';

const pseudocode = `
if (HID2[PSE] == 0) {
  Goto illegial instruction error handler
}
EA = (rA) + (rB)
lt = qrI[LD_TYPE]
ls = qrI[LD_SCALE]
c = 4
if (lt == 4 || lt == 6) {
  c = 10
}
if (lt == 5 || lt == 7) {
  c = 20
}
if (W == 0) {
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
  "mnemonic": "psq_lux",
  "fullName": "Paired Single Quantized Load with update Indexed, (x’1000 004C’)",
  "baseHex": "1000004C",
  "opcode": "000100",
  "parameters": [

    frD,
    rA,
    rB,
    {
      label: "W",
      description: "unknown",
      bits: [ 16 ]
    },
    I(1)
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 38,
    bits: [
      25,
      30
    ]
  },
  "reserved": null,
  "description": "PS0 and PS1 in frD are loaded with a pair of single precision floating point numbers.\nMemory is accessed at the effective address (EA is the sum (rA) + (rB)) as defined by the\ninstruction. A pair of numbers from memory are converted as defined by the indicated GQR\ncontrol registers and the results are placed into PS0 and PS1. However, if W=1 then only\none number is accessed from memory, converted according to GQR and placed into PS0.\nPS1 is loaded with a floating point value of 1.0.\nThe 3 bit field I selects one of the eight 32 bit GQR control registers. From this register the\nLOAD_SCALE and the LD_TYPE fields are used. The LD_TYPE field defines whether\nthe data in memory is floating point or integer format. If the latter it also defines whether\neach integer is 8-bits or 16-bits, signed or unsigned. The LOAD_SCALE field is applied\nonly to integer numbers and is a signed integer that is subtracted from the exponent after\nthe integer number from memory has been converted to floating point format.\n(See Section 2.3.4.3.12 for dequantized operation.)\nThe effective address is placed into register rA.\nIf rA = 0, the instruction form is invalid."
}