import {SR, rS} from './instruction';

const pseudocode = `
SEGREG(SR) = (rS)
`;

export default {
  "mnemonic": "mtsr",
  "fullName": "Move to Segment Register",
  "baseHex": "7C0001A4",
  "opcode": "011111",
  "parameters": [

    SR,
    rS
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 210,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    [
      11
    ],
    [
      16,
      20
    ],
    [
      31
    ]
  ],
  "description": "The contents of rS are placed into SR.\nThis is a supervisor-level instruction."
}