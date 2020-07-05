import {rA, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "dcbt",
  "fullName": "Data Cache Block Touch",
  "baseHex": "7C00022C",
  "opcode": "011111",
  "parameters": [

    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 278,
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
  "description": "EA is the sum (rA|0) + (rB).\nThis instruction is a hint that performance will possibly be improved if the block containing the\nbyte addressed by EA is fetched into the data cache, because the program will probably soon load\nfrom the addressed byte. If the block is caching-inhibited, the hint is ignored and the instruction is\ntreated as a no-op. Executing dcbt does not cause the system alignment error handler to be invoked.\nIf HID2[LCE] = 1 and the byte addressed by EA is in neither the locked nor the normal cache, then\nthis instruction loads the cache line into the “normal” cache.\nThis instruction is treated as a load from the addressed byte with respect to address translation,\nmemory protection, and reference and change recording except that referenced and changed bit\nrecording may not occur. Additionally, no exception occurs in the case of a translation fault or\nprotection violation.\nThe program uses the dcbt instruction to request a cache block fetch before it is actually needed\nby the program. The program can later execute load instructions to put data into registers. However,\nthe processor is not obliged to load the addressed block into the data cache. Note that this\ninstruction is defined architecturally to perform the same functions as the dcbtst instruction. Both\nare defined in order to allow implementations to differentiate the bus actions when fetching into the\ncache for the case of a load and for a store."
}