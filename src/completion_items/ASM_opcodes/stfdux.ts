import {frS, rA, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "stfdux",
  "fullName": "Store Floating-Point Double with Update Indexed",
  "baseHex": "7C0005EE",
  "opcode": "011111",
  "parameters": [

    frS,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 759,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    [
      31
    ]
  ],
  "description": "EA is the sum (rA) + (rB).\nThe contents of register frS are stored into the double word in memory addressed by EA.\nEA is placed into rA.\nIf rA = 0, the instruction form is invalid."
}