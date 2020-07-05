import {rA, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "dcbz",
  "fullName": "Data Cache Block Clear to Zero",
  "baseHex": "7C0007EC",
  "opcode": "011111",
  "parameters": [

    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 1014,
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
  "description": "EA is the sum (rA|0) + (rB).\nThis instruction is treated as a store to the addressed byte with respect to address translation,\nmemory protection, referenced and changed recording. It is also treated as a store with respect to\nthe ordering enforced by eieio and the ordering enforced by the combination of caching-inhibited\nand guarded attributes for a page (or block).\nThe dcbz instruction executes as follows:\n• If the cache block containing the byte addressed by EA is in the data cache, all bytes are\ncleared and the cache line is matked “M”..\n• If the cache block containing the byte addressed by EA is not in the data cache and the\ncorresponding memory page or block is caching-allowed, the cache block is allocated (and\nmade valid) in the data cache (or in the normal cache if HID2[LCE] = 1) without fetching\nthe block from main memory, and all bytes are cleared.\n• If the page containing the byte addressed by EA is in caching-inhibited or write-through\nmode, either all bytes of main memory that correspond to the addressed cache block are\ncleared or the alignment exception handler is invoked. The exception handler can then clear\nall bytes in main memory that correspond to the addressed cache block.\n• If the cache block containing the byte addressed by EA is in coherency-required\nmode, and the cache block exists in the data cache(s) of any other processor(s), it is\nkept coherent in those caches (i.e. the processor performs the appropriate bus\ntransactions to enforce this)."
}