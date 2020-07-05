import {rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "tlbie",
  "fullName": "Translation Lookaside Buffer Invalidate Entry",
  "baseHex": "7C000264",
  "opcode": "011111",
  "parameters": [

    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 306,
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
      31
    ]
  ],
  "description": "VPS ¬ rB[4-19]\nIdentify TLB entries corresponding to VPS\nEach such TLB entry ¬ invalid\nEA is the contents of rB. If the translation lookaside buffer (TLB) contains an entry\ncorresponding to EA, that entry is made invalid (that is, removed from the TLB).\nMultiprocessing implementations (for example, the 601, and 604) send a tlbie address-only\nbroadcast over the address bus to tell other processors to invalidate the same TLB entry in\ntheir TLBs.\nThe TLB search is done regardless of the settings of MSR[IR] and MSR[DR]. The search is\ndone based on a portion of the logical page number within a segment, without reference to the\nSLB, segment table, or segment registers. All entries matching the search criteria are\ninvalidated.\nBlock address translation for EA, if any, is ignored. Refer to Section 7.5.3.4,\n“Synchronization of Memory Accesses and Referenced and Changed Bit Updates” and\nSection 7.6.3, “Page Table Updates” in the PowerPC Microprocessor Family: The\nProgramming Environments manual for other requirements associated with the use of this\ninstruction.\nThis is a supervisor-level instruction and optional in the PowerPC architecture."
}