import {rA, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "icbi",
  "fullName": "Instruction Cache Block Invalidate",
  "baseHex": "7C0007AC",
  "opcode": "011111",
  "parameters": [

    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 982,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    [
      6,
      10
    ]
  ],
  "description": "EA is the sum (rA|0) + (rB).\nIf the block containing the byte addressed by EA is in coherency-required mode, and a block\ncontaining the byte addressed by EA is in the instruction cache of any processor, the block is\nmade invalid in all such instruction caches, so that subsequent references cause the block to\nbe refetched.\nIf the block containing the byte addressed by EA is in coherency-not-required mode, and a\nblock containing the byte addressed by EA is in the instruction cache of this processor, the\nblock is made invalid in that instruction cache, so that subsequent references cause the block\nto be refetched.\nThe function of this instruction is independent of the write-through, write-back, and\ncaching-inhibited/allowed modes of the block containing the byte addressed by EA.\nThis instruction is treated as a load from the addressed byte with respect to address translation\nand memory protection. It may also be treated as a load for referenced and changed bit\nrecording except that referenced and changed bit recording may not occur. Implementations\nwith a combined data and instruction cache treat the icbi instruction as a no-op, except that\nthey may invalidate the target block in the instruction caches of other processors if the block\nis in coherency-required mode.The icbi instruction invalidates the block at EA (rA|0 + rB).\nIf the processor is a multiprocessor implementation (for example, the 601, 604, or 620) and\nthe block is marked coherency-required, the processor will send an address-only broadcast to\nother processors causing those processors to invalidate the block from their instruction\ncaches.\nFor faster processing, many implementations will not compare the entire EA (rA|0 + rB) with\nthe tag in the instruction cache. Instead, they will use the bits in the EA to locate the set that\nthe block is in, and invalidate all blocks in that set."
}