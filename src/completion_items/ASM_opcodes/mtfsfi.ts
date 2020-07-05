import {crfD, IMM, Rc} from './instruction';

const pseudocode = `
FPSCR[crfD] = IMM
`;

export default {
  "mnemonic": "mtfsfi",
  "fullName": "Move to FPSCR Field Immediate",
  "baseHex": "FC00010C",
  "opcode": "111111",
  "parameters": [

    crfD,
    IMM
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 134,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    [
      9,
      10
    ],
    [
      11,
      15
    ],
    [
      20
    ]
  ],
  "description": "mtfsfi. crfD,IMM (Rc = 1)\n    FPSCR[crfD] ¬ IMM\nThe value of the IMM field is placed into FPSCR field crfD.\nFPSCR[FX] is altered only if crfD = 0.\nWhen FPSCR[0–3] is specified, bits 0 (FX) and 3 (OX) are set to the values of IMM[0] and\nIMM[3] (that is, even if this instruction causes OX to change from 0 to 1, FX is set from\nIMM[0] and not by the usual rule that FX is set when an exception bit changes from 0 to 1).\nBits 1 and 2 (FEX and VX) are set according to the usual rule and not from IMM[1–2]."
}