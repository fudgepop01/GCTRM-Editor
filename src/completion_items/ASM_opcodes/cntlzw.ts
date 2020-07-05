import {rA, rS, Rc} from './instruction';

const pseudocode = `
n = 0
while (n < 32) {
  if (rS[n] == 1) {
    break
  }
  n += 1
}
rA = n
`;

export default {
  "mnemonic": "cntlzw",
  "fullName": "Count Leading Zeros Word",
  "baseHex": "7C000034",
  "opcode": "011111",
  "parameters": [

    rA,
    rS
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 26,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    16,
    20
  ],
  "description": "A count of the number of consecutive zero bits starting at bit 0of rS is placed into rA. This number\nranges from 0 to 32, inclusive."
}