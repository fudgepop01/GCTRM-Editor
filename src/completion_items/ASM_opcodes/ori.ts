import {rA, rS, UIMM} from './instruction';

const pseudocode: string = `
rA = (rS) | ((16)0 || UIMM)
`;

export default {
  "mnemonic": "ori",
  "fullName": "OR Immediate",
  "baseHex": "60000000",
  "opcode": "011000",
  "parameters": [

    rA,
    rS,
    UIMM
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "The contents of rS are ORed with 0x0000 || UIMM and the result is placed into rA.\nThe preferred no-op (an instruction that does nothing) is ori 0,0,0.",
  "simple": [{
    name: "nop",
    isSimple(values: number[]) { return values.every(val => val === 0) },
    parameters: []
  }]
}
