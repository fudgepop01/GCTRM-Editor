import { rD, rA, SIMM } from './instruction';

const pseudocode = `
  rD = (rA) + EXTS(SIMM)
`;

export default {
  "mnemonic": "addic.",
  "fullName": "Add Immediate Carrying and Record",
  "baseHex": "34000000",
  "opcode": "001101",
  "parameters": [ rD, rA, SIMM ],
  "modifiers": [],
  "pseudocode": pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "The sum (rA) + the sign extended SIMM is placed into rD.",
  "simple": [{
    "name": "subic.",
    isSimple(values: number[]) {
      if (values[2] && values[2] < 0) return true;
      else return false;
    },
    "parameters": [ rD, rA, SIMM ]
  }],
}