import {rA, rS, rB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "srw",
  "fullName": "Shift Right Word",
  "baseHex": "7C000430",
  "opcode": "011111",
  "parameters": [

    rA,
    rS,
    rB
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 536,
    bits: [
      21,
      30
    ]
  },
  "reserved": null,
  "description": "srw. rA,rS,rB (Rc = 1)\n    n ¬ rB[27-31]\n    r ¬ ROTL(rS, 32– n)\n    if rB[26] = 0\n    then m ¬ MASK(n , 31)\n    else m ¬ (32)0\n    rA ¬ r & m\nThe contents of rS are shifted right the number of bits specified by the low-order five bits\nof rB (shift amounts between 0-31). Bits shifted out of position 31 are lost. Zeros are\nsupplied to the vacated positions on the left. The 32-bit result is placed into rA. However,\nshift amounts from 32 to 63 give a zero result."
}