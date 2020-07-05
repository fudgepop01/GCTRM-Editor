import {rD, rB} from './instruction';

const pseudocode = `
rD = SEGREG(rB[0-3])
`;

export default {
  "mnemonic": "mfsrin",
  "fullName": "Move from Segment Register Indirect",
  "baseHex": "7C000526",
  "opcode": "011111",
  "parameters": [

    rD,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 659,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    [
      11,
      15
    ],
    [
      31
    ]
  ],
  "description": "The contents of the segment register selected by bits 0–3 of rB are copied into rD.\nThis is a supervisor-level instruction.\nNOTE: The rA field is not defined for the mfsrin instruction in the PowerPC architecture.\nHowever, mfsrin performs the same function in the PowerPC architecture as does the\nmfsri instruction in the POWER architecture (if rA = 0)."
}