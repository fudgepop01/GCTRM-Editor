import {rA, rS, SH, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "srawi",
  "fullName": "Shift Right Algebraic Word Immediate",
  "baseHex": "7C000670",
  "opcode": "011111",
  "parameters": [

    rA,
    rS,
    SH
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": {
    value: 824,
    bits: [
      21,
      30
    ]
  },
  "reserved": null,
  "description": "srawi. rA,rS,SH (Rc = 1)\n    n ¬ SH\n    r ¬ ROTL(rS, 32 – n)\n    m¬ MASK(n, 31)\n    S ¬ rS(0)\n    rA ¬ r & m | (32)S & ¬ m\n    XER[CA] ¬ S(0) & ((r & ¬ m) ¹ 0)\nThe contents of rS are shifted right SH bits. Bits shifted out of position 31 are lost. Bit 0 of\nrS is replicated to fill the vacated positions on the left. The result is placed into rA. XER[CA]\nis set if the 32 bits of rS contain a negative number and any 1 bits are shifted out of position\n31; otherwise XER[CA] is cleared. A shift amount of zero causes rA to receive the value of\nrS, and XER[CA] to be cleared.\nNOTE: The srawi instruction followed by addze instruction can be used to divide quickly by 2n."
}