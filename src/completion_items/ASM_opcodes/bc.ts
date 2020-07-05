import {BO, BI, target_addr, AA, LK} from './instruction';

const pseudocode = `
if (¬ BO[2]) {
  CTR = CTR - 1
}
ctr_ok = BO[2] | ((CTR ≠ 0) ⊕ BO[3])
cond_ok = BO[0] | (CR[BI] ≡ BO[1])
if (ctr_ok && cond_ok) {
  if (AA == 1) {
    NIA <=iea EXTS(BD || 0b00)
  }
  else {
    CIA + EXTS(BD || 0b00)
  }

  if (LK) {
    LR <=iea CIA + 4
  }
}
`;

export default {
  "mnemonic": "bc",
  "fullName": "Branch Conditional",
  "baseHex": "40000000",
  "opcode": "010000",
  "parameters": [

    BO,
    BI,
    target_addr(1)
  ],
  "modifiers": [
    AA,
    LK
  ],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "target_addr specifies the branch target address.\nThe BI field specifies the bit in the condition register (CR) to be used as the condition of the branch.\nThe BO field is encoded as described in Table 12-6.\nAdditional information about BO field encoding is provided in Section 4.2.4.2, “Conditional\nBranch Control,” in the PowerPC Microprocessor Family: The Programming Environments\nmanual.",
  "simple": [{
    "name": "blt",
    isSimple(values: number[]) {return values[0] == 12 && values[1] == 0},
    "parameters": [target_addr]
  },
  {
    "name": "bne",
    isSimple(values: number[]) {return values[0] == 4 && values[1] === 10},
    "parameters": [target_addr]
  },
  {
    "name": "bdnz",
    isSimple(values: number[]) {return values[0] == 16 && values[1] === 0},
    "parameters": [target_addr]
  }]
}