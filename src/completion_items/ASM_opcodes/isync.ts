import {OPCD} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "isync",
  "fullName": "Instruction Synchronize",
  "baseHex": "4C00012C",
  "opcode": "010011",
  "parameters": [
    OPCD
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 150,
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
  "description": "The isync instruction provides an ordering function for the effects of all instructions\nexecuted by a processor. Executing an isync instruction ensures that all instructions\npreceding the isync instruction have completed before the isync instruction completes,\nexcept that memory accesses caused by those instructions need not have been performed\nwith respect to other processors and mechanisms. It also ensures that no subsequent\ninstructions are initiated by the processor until after the isync instruction completes.\nFinally, it causes the processor to discard any prefetched instructions, with the effect that\nsubsequent instructions will be fetched and executed in the context established by the\ninstructions preceding the isync instruction. The isync instruction has no effect on the other\nprocessors or on their caches.\nThis instruction is context synchronizing.\nContext synchronization is necessary after certain code sequences that perform complex\noperations within the processor. These code sequences are usually operating system tasks\nthat involve memory management. For example, if an instruction A changes the memory\ntranslation rules in the memory management unit (MMU), the isync instruction should be\nexecuted so that the instructions following instruction A will be discarded from the pipeline\nand refetched according to the new translation rules.\nNOTE: All exceptions and the rfi and sc instructions are also context synchronizing."
}