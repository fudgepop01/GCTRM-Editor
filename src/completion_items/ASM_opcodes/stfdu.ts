import {frS, rA, d} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "stfdu",
  "fullName": "Store Floating-Point Double with Update",
  "baseHex": "DC000000",
  "opcode": "110111",
  "parameters": [

    frS,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": [
    [
      31
    ]
  ],
  "description": "EA is the sum (rA) + d.\nThe contents of register frS are stored into the double word in memory addressed by EA.\nEA is placed into rA.\nIf rA = 0, the instruction form is invalid."
}