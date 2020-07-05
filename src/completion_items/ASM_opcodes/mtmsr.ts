import {rS} from './instruction';

const pseudocode = `
MSR = (rS)
`;

export default {
  "mnemonic": "mtmsr",
  "fullName": "Move to Machine State Register",
  "baseHex": "7C000124",
  "opcode": "011111",
  "parameters": [

    rS
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 146,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
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
  "description": "The contents of rS are placed into the MSR.\nThis is a supervisor-level instruction. It is also an execution synchronizing instruction\nexcept with respect to alterations to the POW and LE bits. Refer to Section 2.3.18,\n“Synchronization Requirements for Special Registers and for Lookaside Buffers” in the the\nPowerPC Microprocessor Family: The Programming Environments manual for more\ninformation.\nIn addition, alterations to the MSR[EE] and MSR[RI] bits are effective as soon as the\ninstruction completes. Thus if MSR[EE] = 0 and an external or decrementer exception is\npending, executing an mtmsr instruction that sets MSR[EE] = 1 will cause the external or\ndecrementer exception to be taken before the next instruction is executed, if no higher\npriority exception exists."
}