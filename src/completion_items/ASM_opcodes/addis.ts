import { rD, rA, SIMM, } from './instruction';

const pseudocode = `
if(rA == 0) {
  rD = (SIMM || (16)0)
}
else {
  rD = (rA) + (SIMM || (16)0)
}
`;

export default {
  "mnemonic": "addis",
  "fullName": "Add Immediate Shifted",
  "baseHex": "3C000000",
  "opcode": "001111",
  "parameters": [ rD, rA, SIMM ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "The sum (rA|0) + (SIMM || 0x0000) is placed into rD.\nThe addis instruction is preferred for addition because it sets few status bits. Note that addis uses\nthe value 0, not the contents of GPR0, if rA = 0.",
  "simple": [{
    "name": "lis",
    isSimple(values: number[]) { return values[1] && values[1] == 0 },
    "parameters": [rD, SIMM]
  },
  {
    "name": "subis",
    isSimple(values: number[]) { return values[2] && values[2] < 0 },
    "parameters": [rD, rA, SIMM]
  }]
}