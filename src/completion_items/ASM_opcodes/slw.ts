import {rA, rS, rB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "slw",
  "fullName": "Shift Left Word",
  "baseHex": "7C000030",
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
    value: 24,
    bits: [
      21,
      30
    ]
  },
  "reserved": null,
  "description": "slw. rA,rS,rB (Rc = 1)\n    n¬ rB[27-31]\n    r ¬ ROTL(rS , n)\n    if rB[26] = 0\n    then m ¬ MASK(0 , 31 – n)\n    else m ¬ (32)0\n    rA ¬ r & m\nThe contents of rS are shifted left the number of bits specified by the low-order five bits of\nrB. Bits shifted out of position 0 are lost. Zeros are supplied to the vacated positions on the\nright. The 32-bit result is placed into rA. However, shift amounts from 32 to 63 give a zero\nresult."
}