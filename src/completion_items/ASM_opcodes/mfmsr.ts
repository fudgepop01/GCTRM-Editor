import {rD} from './instruction';

const pseudocode = `
rD = MSR
`;

export default {
  "mnemonic": "mfmsr",
  "fullName": "Move from Machine State Register",
  "baseHex": "7C0000A6",
  "opcode": "011111",
  "parameters": [

    rD
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 83,
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
      16,
      20
    ],
    31
  ],
  "description": "The contents of the MSR are placed into rD.\nThis is a supervisor-level instruction."
}