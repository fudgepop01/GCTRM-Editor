import { rD, rA, SIMM } from './instruction';

const pseudocode = `
  rD = (rA) + EXTS(SIMM)
`;

export default {
  "mnemonic": "addic",
  "fullName": "Add Immediate Carrying",
  "baseHex": "30000000",
  "opcode": "001100",
  "parameters": [ rD, rA, SIMM ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": pseudocode,
  "simple": [{
    "name": "subic",
    isSimple(values: number[]) {
      if (values[2] && values[2] < 0) return true;
      else return false;
    },
    "parameters": [ rD, rA, SIMM ]
  }]
}