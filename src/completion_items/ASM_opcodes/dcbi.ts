import {rA, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "dcbi",
  "fullName": "Data Cache Block Invalidate",
  "baseHex": "7C0003AC",
  "opcode": "011111",
  "parameters": [

    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 470,
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
  "description": "EA is the sum (rA|0) + (rB).\nThe action taken is dependent on the memory mode associated with the block containing the byte\naddressed by EA and on the state of that block. The list below describes the action taken if the block\ncontaining the byte addressed by EA is or is not in the cache.\n— Unmodified block—Invalidates the block in the processor’s data cache.\n— Modified block—Invalidates the block in the processor’s data cache. (Discards\nthe modified contents.)\n— Absent block (target block not in cache)—No action is taken.\nWhen data address translation is enabled, MSR[DR] = 1, and the virtual address has no translation,\na DSI exception occurs.\nThe function of this instruction is independent of the write-through and caching-inhibited/allowed\nmodes of the block containing the byte addressed by EA. This instruction operates as a store to the\naddressed byte with respect to address translation and protection. The referenced and changed bits\nare modified appropriately.\nWhen HID2[LCE] = 1 and the byte addressed by EA is in the locked cache, the instruction is not\nforwarded to the L2 cache for sector invalidation, nor forwarded to the 60x bus for broadcast.\nOtherwise, the instruction will be forwarded to teh L2 cache and to the 60x bus as described in\nSections 3.4.2.4 and 9.2.1, in the PowerPC Microprocessor Family: The Programming\nEnvironments manual.\nThis is a supervisor-level instruction."
}