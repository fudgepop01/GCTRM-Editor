import { rD, rA, SIMM } from './instruction';

const pseudocode = `
  if (rA == 0) {
    rD = EXTS(SIMM)
  }
  else {
    rD = (rA) + EXTS(SIMM)
  }
`;

export default {
  "mnemonic": "addi",
  "fullName": "Add Immediate",
  "baseHex": "38000000",
  "opcode": "001110",
  "parameters": [ rD, rA, SIMM ],
  "modifiers": [],
  "pseudocode": pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "The sum (rA|0) + sign extended SIMM is placed into rD."
}