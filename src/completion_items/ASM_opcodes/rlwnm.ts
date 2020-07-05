import {rA, rS, rB, MB, ME, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "rlwnm",
  "fullName": "Rotate Left Word then AND with Mask",
  "baseHex": "5C000000",
  "opcode": "010111",
  "parameters": [

    rA,
    rS,
    rB,
    MB,
    ME
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "rlwnm. rA,rS,rB,MB,ME (Rc = 1)\n    n ¬ rB[27-31]\n    r ¬ ROTL(rS, n)\n    m ¬ MASK(MB, ME)\n    rA ¬ r & m\nThe contents of rS are rotated left the number of bits specified by the low-order five bits of\nrB. A mask is generated having 1 bits from bit MB through bit ME and 0 bits elsewhere. The\nrotated data is ANDed with the generated mask and the result is placed into rA.\nNOTE: rlwnm can be used to extract and to rotate bit fields using one of these methods:\n• To extract an n-bit field, that starts at variable bit position b in rS, right-justified into\nrA (clearing the remaining 32 – n bits of rA), set the low-order five bits of rB to b +\nn, set MB = 32 – n, and set ME = 31.\n• To extract an n-bit field, that starts at variable bit position b in rS, left-justified into rA\n(clearing the remaining 32 – n bits of rA), set the low-order five bits of rB to b, set MB\n= 0, and set ME = n – 1.\n• To rotate the contents of a register left (or right) by n bits, set the low-order five bits of\nrB to n (32 – n), set MB = 0, and set ME = 31.",
  "simple": [{
    name: "rotlw",
    isSimple(values: number[]) { return values[3] === 0 && values[4] === 31 },
    "equivalent": "rlwnm rA, rS, rB, 0, 31",
    parameters: [ rA, rS, rB ]
  }]
}