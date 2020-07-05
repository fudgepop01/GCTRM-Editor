import {rA, rS, SH, MB, ME, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "rlwimi",
  "fullName": "Rotate Left Word Immediate then Mask Insert",
  "baseHex": "50000000",
  "opcode": "010100",
  "parameters": [

    rA,
    rS,
    SH,
    MB,
    ME
  ],
  "modifiers": [
    Rc
  ],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "rlwimi. rA,rS,SH,MB,ME (Rc = 1)\n    n¬ SH\n    r ¬ ROTL(rS, n)\n    m ¬ MASK(MB, ME)\n    rA ¬ (r & m) | (rA & ¬ m)\nThe contents of rS are rotated left the number of bits specified by operand SH. A mask is\ngenerated having 1 bits from bit MBthrough bit ME and 0 bits elsewhere. The rotated data\nis inserted into rA under control of the generated mask.\nNOTE: rlwimi can be used to copy a bit field of any length from register rS into the contents\nof rA. This field can start from any bit position in rS and be placed into any position in\nrA. The length of the field can range from 0 to 32 bits. The remaining bits in register\nrA remain unchanged. :\n• To copy byte_0 (bits 0-7) from rS into byte_3 (bits 24-31) of rA , set SH = 8 ,\nset MB = 24, and set ME = 31.\n• In general, to copy an n-bit field that starts in bit position b in register rS into register\nrA starting a bit position c: set SH = 32 - c + b Mod(32), set MB = c, and set\nME = (c + n) – 1 Mod(32).",
  /* unsure how to implement these
  "simple": [{
    name: "",
    isSimple(values: number[]) { return values[3] === 32 - values[2] && values[3] === ... }
  }, {
    name: "",
    isSimple(values: number[]) { return values[3] === 32 - values[2] && values[3] === ... }
  }]*/
}