import {frS, rA, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "stfiwx",
  "fullName": "Store Floating-Point as Integer Word Indexed",
  "baseHex": "7C0007AE",
  "opcode": "011111",
  "parameters": [

    frS,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 983,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    [
      31
    ]
  ],
  "description": "EA is the sum (rA|0) + (rB).\nThe contents of the low-order 32 bits of register frS are stored, without conversion, into the\nword in memory addressed by EA.\nThis instruction when preceded by the floating-point convert to integer word (fctiwx) or\nfloating-point convert to integer word with round toward zero (fctiwzx) will store the 32-bit\ninteger value of a double-precision floating-point number. (see fctiwx and fctiwzx\ninstructions)\nDo NOT attempt to use this instruction to store the ps1 value for paired-single floating-point\noperands, the stored value is undefined.\nIf the content of register frS is a double-precision floating point number, the low-order 32 bits\nof the 52 bit mantissa are stored. (without the exponent, this could be a meaningless value)\nIf the contents of register frS were produced, either directly or indirectly, by an lfs instruction,\na single-precision arithmetic instruction, or frsp, then the value stored is the low-order 32 bits\nof the 52 bit mantissa of the double-precision number. (all single-precision floating-point\nnumbers are maintained in double precision format in the floating-point register file)\nWhen HID2[PSE] = 1, the input operand in frS must be the result of an fctiw or fctiwz\ninstruction. Otherweise, the result is undefined."
}