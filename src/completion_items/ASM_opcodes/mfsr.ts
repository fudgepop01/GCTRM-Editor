import {rD, SR} from './instruction';

const pseudocode = `
rD = SEGREG(SR)
`;

export default {
  "mnemonic": "mfsr",
  "fullName": "Move from Segment Register",
  "baseHex": "7C0004A6",
  "opcode": "011111",
  "parameters": [

    rD,
    SR
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 595,
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
  "description": "The contents of the segment register SR are copied into rD.\nThis is a supervisor-level instruction."
}