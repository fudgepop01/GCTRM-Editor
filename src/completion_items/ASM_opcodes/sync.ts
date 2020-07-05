import {OPCD} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "sync",
  "fullName": "Synchronize",
  "baseHex": "7C0004AC",
  "opcode": "011111",
  "parameters": [
    OPCD
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 598,
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
  "description": "The sync instruction provides an ordering function for the effects of all instructions\nexecuted by a given processor. Executing a sync instruction ensures that all instructions\npreceding the sync instruction appear to have completed before the sync instruction\ncompletes, and that no subsequent instructions are initiated by the processor until after the\nsync instruction completes. When the sync instruction completes, all external accesses\ncaused by instructions preceding the sync instruction will have been performed with\nrespect to all other mechanisms that access memory. For more information on how the sync\ninstruction affects the VEA, refer to Chapter 5, “Cache Model and Memory Coherency” in\nthe PowerPC Microprocessor Family: The Programming Environments manual.\nMultiprocessor implementations also send a sync address-only broadcast that is useful in\nsome designs. For example, if a design has an external buffer that re-orders loads and stores\nfor better bus efficiency, the sync broadcast signals to that buffer that previous loads/stores\nmust be completed before any following loads/stores.\nThe sync instruction can be used to ensure that the results of all stores into a data structure,\ncaused by store instructions executed in a “critical section” of a program, are seen by other\nprocessors before the data structure is seen as unlocked.\nThe functions performed by the sync instruction will normally take a significant amount of\ntime to complete, so indiscriminate use of this instruction may adversely affect\nperformance. In addition, the time required to execute sync may vary from one execution\nto another.\nThe eieio instruction may be more appropriate than sync for many cases.\nThis instruction is execution synchronizing. For more information on execution\nsynchronization, see Section 4.1.5, “Synchronizing Instructions,” in The Programming\nEnvironments Manual."
}