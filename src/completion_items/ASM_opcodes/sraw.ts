import {rA, rS, rB, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "sraw",
  "fullName": "Shift Right Algebraic Word",
  "baseHex": "7C000630",
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
    value: 792,
    bits: [
      21,
      30
    ]
  },
  "reserved": null,
  "description": "sraw. rA,rS,rB (Rc = 1)\n    n¬ rB[27-31]\n    r ¬ ROTL(rS, 32– n)\n    if rB[26] = 0\n    then m ¬ MASK(n, 31)\n    else m ¬ (32)0\n    S ¬ rS(0)\n    rA ¬ r & m | (32)S & ¬ m\n    XER[CA] ¬ S & (r & ¬ m[0-31] ¹ 0\nThe contents of rS are shifted right the number of bits specified by the low-order five bits\nof rB (shift amounts between 0-31). Bits shifted out of position 31 are lost. Bit 0 of rS is\nreplicated to fill the vacated positions on the left. The 32-bit result is placed into rA.\nXER[CA] is set if rS contains a negative number and any 1 bits are shifted out of position\n31; otherwise XER[CA] is cleared. A shift amount of zero causes rA to receive the 32 bits\nof rS, and XER[CA] to be cleared. However, shift amounts from 32 to 63 give a result of\n32 sign bits, and cause XER[CA] to receive the sign bit of rS.\nNOTE: The sraw instruction, followed by addze, can be used to divide quickly by 2n."
}