import {OPCD} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "tlbsync",
  "fullName": "TLB Synchronize",
  "baseHex": "7C00046C",
  "opcode": "011111",
  "parameters": [
    OPCD
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 566,
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
    [
      31
    ]
  ],
  "description": "If an implementation sends a broadcast for tlbie then it will also send a broadcast for\ntlbsync. Executing a tlbsync instruction ensures that all tlbie instructions previously\nexecuted by the processor executing the tlbsync instruction have completed on all other\nprocessors.\nThe operation performed by this instruction is treated as a caching-inhibited and guarded\ndata access with respect to the ordering done by eieio.\nNOTE: The 601 expands the use of the sync instruction to cover tlbsync functionality.\nRefer to Section 7.5.3.4, “Synchronization of Memory Accesses and Referenced and\nChanged Bit Updates” and Section 7.6.3, “Page Table Updates” in the PowerPC\nMicroprocessor Family: The Programming Environments manual for other requirements\nassociated with the use of this instruction.\nThis instruction is supervisor-level and optional in the PowerPC architecture."
}