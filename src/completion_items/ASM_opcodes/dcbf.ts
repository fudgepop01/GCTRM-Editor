import {rA, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "dcbf",
  "fullName": "Data Cache Block Flush",
  "baseHex": "7C0000AC",
  "opcode": "011111",
  "parameters": [

    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 86,
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
  "description": "EA is the sum (rA|0) + (rB).\nThe dcbf instruction invalidates the block in the data cache addressed by EA, copying the block to\nmemory first, if there is any dirty data in it. Unmodified block—Invalidates the block in the\nprocessor’s data cache. The list below describes the action taken if the block containing the byte\naddressed by EA is or is not in the cacche:\n— Unmodified block—Invalidates the block in the processor’s data cache.\n— Modified block—Copies the block to memory. Invalidates the block in the\nprocessor’s data cache.\n— Absent block (target block not in cache)—No action is taken.\nThe function of this instruction is independent of the write-through, write-back and\ncaching-inhibited/allowed modes of the block containing the byte addressed by EA. This instruction\nis treated as a load from the addressed byte with respect to address translation and memory protection.\nIt is also treated as a load for referenced and changed bit recording except that referenced and changed\nbit recording may not occur.\nWhen HID2[LCE] = 1 and the byte addressed by EA is in the locked cache, the instruction is not\nforwarded to the L2 cache for sector invalidation/push, nor forwarded to the 60x bus for broadcast.\nOtherwise, the instruction will be forwarded to the L2 cache and to the 60x bus as described in\nSections 3.4.2.4 and 9.2.1, in the PowerPC Microprocessor Family: The Programming Environments\nmanual."
}