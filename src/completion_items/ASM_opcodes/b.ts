import {target_addr, AA, LK} from './instruction';

const pseudocode = `
if (AA == 1) {
  NIA <=iea EXTS(LI || 0b00)
}
else {
  NIA <=iea CIA + EXTS(LI || 0b00)
}

if (LK == 1) {
  LR <=iea CIA + 4
}
`;

export default {
  "mnemonic": "b",
  "fullName": "Branch",
  "baseHex": "48000000",
  "opcode": "010010",
  "parameters": [

    target_addr(0)
  ],
  "modifiers": [
    AA,
    LK
  ],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "target_addr specifies the branch target address.\nIf AA = 1, then the branch target address is the value LI || 0b00 sign-extended.\nIf AA = 0, then the branch target address is the sum of LI || 0b00 sign-extended plus the address of\nthis instruction.\nIf LK = 1, then the effective address of the instruction following the branch instruction is placed into\nthe link register."
}