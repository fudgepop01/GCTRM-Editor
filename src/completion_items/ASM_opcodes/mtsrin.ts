import {rS, rB} from './instruction';

const pseudocode = `
SEGREG(rB[0-3]) = (rS)
`;

export default {
  "mnemonic": "mtsrin",
  "fullName": "Move to Segment Register Indirect",
  "baseHex": "7C0001E4",
  "opcode": "011111",
  "parameters": [

    rS,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 242,
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
  "description": "The contents of rS are copied to the segment register selected by bits 0–3 of rB.\nThis is a supervisor-level instruction.\nNOTE: The PowerPC architecture does not define the rA field for the mtsrin instruction.\nHowever, mtsrin performs the same function in the PowerPC architecture as does the\nmtsri instruction in the POWER architecture (if rA = 0)."
}