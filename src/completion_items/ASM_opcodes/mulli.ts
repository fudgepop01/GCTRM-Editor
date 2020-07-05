import {rD, rA, SIMM} from './instruction';

const pseudocode = `
prod[0-48] = (rA) * SIMM
rD = prod[16-48]
`;

export default {
  "mnemonic": "mulli",
  "fullName": "Multiply Low Immediate",
  "baseHex": "1C000000",
  "opcode": "000111",
  "parameters": [

    rD,
    rA,
    SIMM
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "The first operand is rA. The second operand is the value of the SIMM field. The low-order\n32-bits of the 48-bit product of the operands are placed into rD.\nBoth the operands and the product are interpreted as signed integers. The low-order of the\nproduct are calculated independently of whether the operands are treated as signed or\nunsigned 32-bit integers.\nThis instruction can be used with mulhdx or mulhwx to calculate a full 64-bit product."
}