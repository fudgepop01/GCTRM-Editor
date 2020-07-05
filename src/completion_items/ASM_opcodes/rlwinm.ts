import {rA, rS, SH, MB, ME, Rc} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "rlwinm",
  "fullName": "Rotate Left Word Immediate then AND with Mask",
  "baseHex": "54000000",
  "opcode": "010101",
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
  "description": "rlwinm. rA,rS,SH,MB,ME (Rc = 1)\n    n ¬ SH\n    r ¬ ROTL(rS, n)\n    m ¬ MASK(MB, ME)\n    rA ¬ r & m\nThe contents of rS are rotated left the number of bits specified by operand SH. A mask is\ngenerated having 1 bits from bit MBthrough bit MEand 0 bits elsewhere. The rotated data is\nANDed with the generated mask and the result is placed into rA.\nNOTE: rlwinm can be used to extract, rotate, shift, and clear bit fields using the methods shown\nbelow:\n• To extract an n-bit field, that starts at bit position b in rS, right-justified into rA\n(clearing the remaining 32 – n bits of rA), set SH = b + n,\nset MB = 32 – n, and set ME = 31.\n• To extract an n-bit field, that starts at bit position b in rS, left-justified into rA (clearing\nthe remaining 32 – n bits of rA), set SH = b, set MB = 0, and set ME = n – 1.\n• To rotate the contents of a register left (or right) by n bits, set SH = n (32 – n), set\nMB = 0, and set ME = 31.\n• To shift the contents of a register right by n bits, by setting SH = 32 – n, MB = n, and\nME = 31.\nIt can also be used to clear the high-order b bits of a register and then shift the result left by n\nbits by setting SH = n, by setting MB = b – n, and by setting ME = 31 – n.\n• To clear the low-order n bits of a register, by setting SH = 0, MB = 0, and\nME = 31 – n.",
  /*
  "simple": [{
    name: "",
    isSimple(values: number[]) { return },
    parameters: [ rA, rS, fukidk]
  }, {
    name: "",
    isSimple(values: number[]) { return },
    parameters: [ rA, rS, fukidk]
  }, {
    name: "",
    isSimple(values: number[]) { return },
    parameters: [ rA, rS, fukidk]
  }, {
    name: "",
    isSimple(values: number[]) { return },
    parameters: [ rA, rS, fukidk]
  }, {
    name: "",
    isSimple(values: number[]) { return },
    parameters: [ rA, rS, fukidk]
  }, {
    name: "",
    isSimple(values: number[]) { return },
    parameters: [ rA, rS, fukidk]
  }, {
    name: "",
    isSimple(values: number[]) { return },
    parameters: [ rA, rS, fukidk]
  }, {
    name: "",
    isSimple(values: number[]) { return },
    parameters: [ rA, rS, fukidk]
  }, {
    name: "",
    isSimple(values: number[]) { return },
    parameters: [ rA, rS, fukidk]
  }]
  */
}