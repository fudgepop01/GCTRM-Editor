import {OPCD} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "eieio",
  "fullName": "Enforce In-Order Execution of I/O",
  "baseHex": "7C0006AC",
  "opcode": "011111",
  "parameters": [
    OPCD
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 854,
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
      11,
      15
    ],
    [
      16,
      20
    ],
    31
  ],
  "description": "executed by a processor. These loads and stores are divided into two sets, which are ordered\nseparately. The memory accesses caused by a dcbz or a dcba instruction are ordered like a store.\nThe two sets follow:\n1. Loads and stores to memory that is both caching-inhibited and guarded, and stores\nto memory that is write-through required.\nThe eieio instruction controls the order in which the accesses are performed in main\nmemory. It ensures that all applicable memory accesses caused by instructions\npreceding the eieio instruction have completed with respect to main memory before\nany applicable memory accesses caused by instructions following the eieio\ninstruction access main memory. It acts like a barrier that flows through the memory\nqueues and to main memory, preventing the reordering of memory accesses across\nthe barrier. No ordering is performed for dcbz if the instruction causes the system\nalignment error handler to be invoked.\nAll accesses in this set are ordered as a single set—that is, there is not one order for\nloads and stores to caching-inhibited and guarded memory and another order for\nstores to write-through required memory.\n2. Stores to memory that have all of the following attributes—caching-allowed,\nwrite-through not required, and memory-coherency required.\nThe eieio instruction controls the order in which the accesses are performed with\nrespect to coherent memory. It ensures that all applicable stores caused by\ninstructions preceding the eieio instruction have completed with respect to coherent\nmemory before any applicable stores caused by instructions following the eieio\ninstruction complete with respect to coherent memory.\nWith the exception of dcbz and dcba, eieio does not affect the order of cache operations (whether\ncaused explicitly by execution of a cache management instruction, or implicitly by the cache\ncoherency mechanism). For more information, refer to Chapter 5, “Cache Model and Memory\nCoherency” of the PowerPC Microprocessor Family: The Programming Environments manual.\nThe eieio instruction does not affect the order of accesses in one set with respect to accesses in the\nother set.\nThe eieio instruction may complete before memory accesses caused by instructions preceding the\neieio instruction have been performed with respect to main memory or coherent memory as\nappropriate.\nThe eieio instruction is intended for use in managing shared data structures, in accessing\nmemory-mapped I/O, and in preventing load/store combining operations in main memory. For the\nfirst use, the shared data structure and the lock that protects it must be altered only by stores that are\nin the same set (1 or 2; see previous discussion). For the second use, eieio can be thought of as placing\na barrier into the stream of memory accesses issued by a processor, such that any given memory\naccess appears to be on the same side of the barrier to both the processor and the I/O device.\nBecause the processor performs store operations in order to memory that is designated as both\ncaching-inhibited and guarded (refer to Section 5.1.1, “Memory Access Ordering” in the PowerPC\nMicroprocessor Family: The Programming Environments manual), the eieio instruction is needed for\nsuch memory only when loads must be ordered with respect to stores or with respect to other loads.\nNote that the eieio instruction does not connect hardware considerations to it such as multiprocessor\nimplementations that send an eieio address-only broadcast (useful in some designs). For example, if\na design has an external buffer that re-orders loads and stores for better bus efficiency, the eieio\nbroadcast signals to that buffer that previous loads/stores (marked caching-inhibited, guarded, or\nwrite-through required) must complete before any following loads/stores (marked caching-inhibited,\nguarded, or write-through required)."
}