import {rA, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "dcbtst",
  "fullName": "Data Cache Block Touch for Store",
  "baseHex": "7C0001EC",
  "opcode": "011111",
  "parameters": [

    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 246,
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
  "description": "EA is the sum (rA|0) + (rB).\nThis instruction is a hint that performance will possibly be improved if the block containing the byte\naddressed by EA is fetched into the data cache, because the program will probably soon store from\nthe addressed byte. If the block is caching-inhibited, the hint is ignored and the instruction is treated\nas a no-op. Executing dcbtst does not cause the system alignment error handler to be invoked.\nIf HID2[LCE] = 1 and the byte addressed by EA is in neither the locked nor the normal cache, then\nthis instruction loads the cache line into the “normal” cache.\nThis instruction is treated as a load from the addressed byte with respect to address translation,\nmemory protection, and reference and change recording except that referenced and changed bit\nrecording may not occur. Additionally, no exception occurs in the case of a translation fault or\nprotection violation.\nThe program uses dcbtst to request a cache block fetch to potentially improve performance for a\nsubsequent store to that EA, as that store would then be to a cached location. However, the processor\nis not obliged to load the addressed block into the data cache. Note that this instruction is defined\narchitecturally to perform the same functions as the dcbt instruction. Both are defined in order to\nallow implementations to differentiate the bus actions when fetching into the cache for the case of a\nload and for a store."
}