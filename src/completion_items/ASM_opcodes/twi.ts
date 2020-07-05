import {TO, rA, SIMM} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "twi",
  "fullName": "Trap Word Immediate",
  "baseHex": "0C000000",
  "opcode": "000011",
  "parameters": [

    TO,
    rA,
    SIMM
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "The contents of rA are compared arithmetically with the sign-extended value of the SIMM\nfield for TO[0, 1, 2]. The contents of rA are compared logically with the sign-extended\nvalue of the SIMM field for TO[3, 4]. If any bit in the TO field is set and its corresponding\ncondition is met by the result of the comparison, then the system trap handler is invoked.",
  "simple": [{
    name: "twgtir",
    isSimple(values: number[]) { return values[0] === 8 },
    parameters: [ rA, SIMM ]
  }, {
    name: "twlleir",
    isSimple(values: number[]) { return values[0] === 6 },
    parameters: [ rA, SIMM ]
  }]
}