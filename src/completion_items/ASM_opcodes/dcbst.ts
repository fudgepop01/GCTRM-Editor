import {rA, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "dcbst",
  "fullName": "Data Cache Block Store",
  "baseHex": "7C00006C",
  "opcode": "011111",
  "parameters": [

    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 54,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    [
      6,
      10
    ],
    [
      31
    ]
  ],
  "description": "EA is the sum (rA|0) + (rB).\nThe dcbst instruction executes as follows:\n• If the block containing the byte addressed by EA is in coherency-not-required mode,\nand a block containing the byte addressed by EA is in the data cache of this processor\nand has been modified, the writing of it to main memory is initiated.\nThe function of this instruction is independent of the write-through and caching-inhibited/allowed\nmodes of the block containing the byte addressed by EA.\nThe processor treats this instruction as a load from the addressed byte with respect to address\ntranslation and memory protection. It is also treated as a load for referenced and changed bit recording\nexcept that referenced and changed bit recording may not occur.\nWhen HID2[LCE] = 1 and the byte addressed by EA is in the locked cache, the instruction is not\nforwarded to the L2 cache for sector invalidation/push, nor forwarded to the 60x bus for broadcast.\nOtherwise, the instruction will be forwarded to the L2 cache and to the 60x bus as described in\nSections 3.4.2.4 and 9.2.1, in the PowerPC Microprocessor Family: The Programming Environments\nmanual."
}