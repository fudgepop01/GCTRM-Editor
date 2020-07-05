import {FM, frB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "mtfsf",
  "fullName": "Move to FPSCR Fields",
  "baseHex": "FC00058E",
  "opcode": "111111",
  "parameters": [

    FM,
    frB
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 711,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    [
      6
    ],
    [
      15
    ]
  ],
  "description": "mtfsf. FM,frB (Rc = 1)\n    ---\nThe low-order 32 bits of frB are placed into the FPSCR under control of the field mask\nspecified by FM. The field mask identifies the 4-bit fields affected. Let i be an integer in the\nrange 0–7. If FM[i] = 1, FPSCR field i (FPSCR bits 4 * i through 4 * i + 3) is set to the\ncontents of the corresponding field of the low-order 32 bits of register frB.\nFPSCR[FX] is altered only if FM[0] = 1.\nUpdating fewer than all eight fields of the FPSCR may have substantially poorer\nperformance on some implementations than updating all the fields.\nWhen FPSCR[0–3] is specified, bits 0 (FX) and 3 (OX) are set to the values of frB[32] and\nfrB[35] (that is, even if this instruction causes OX to change from 0 to 1, FX is set from\nfrB[32] and not by the usual rule that FX is set when an exception bit changes from 0 to 1).\nBits 1 and 2 (FEX and VX) are set according to the usual rule and not from frB[33–34]."
}