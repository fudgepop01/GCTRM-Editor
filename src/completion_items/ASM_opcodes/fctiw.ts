import {frD, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "fctiw",
  "fullName": "Floating Convert to Integer Word",
  "baseHex": "FC00001C",
  "opcode": "111111",
  "parameters": [

    frD,
    frB
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 14,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    [
      11,
      15
    ]
  ],
  "description": "The floating-point operand in register frB is converted to a 32-bit signed integer, using the rounding\nmode specified by FPSCR[RN], and placed in bits 32–63 of frD. Bits 0–31 of frD are undefined.\nIf the operand in frB are greater than 231 – 1, bits 32–63 of frD are set to 0x7FFF_FFFF.\nIf the operand in frB are less than –231, bits 32–63 of frD are set to 0x8000_0000.\nThe conversion is described fully in Section D.4.2, “Floating-Point Convert to Integer Model,” in\nthe PowerPC Microprocessor Family: The Programming Environments manual.\nExcept for trap-enabled invalid operation exceptions, FPSCR[FPRF] is undefined. FPSCR[FR] is\nset if the result is incremented when rounded. FPSCR[FI] is set if the result is inexact.\nDo not use this instruction if the floating point register contains paired-single formatted data.\n(programmers note: A stiwz instruction should be used to store the 32 bit resultant integer because\nbits 0–31 of frD are undefined. A store double-precision instruction, e.g., stfd, will store the 64 bit\nresult but 4 superfluous bytes are stored (bits frD[0-31]). This may cause wasted bus traffic.)"
}