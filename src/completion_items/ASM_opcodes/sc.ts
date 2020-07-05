import {OPCD} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "sc",
  "fullName": "System Call",
  "baseHex": "44000002",
  "opcode": "010001",
  "parameters": [
    OPCD
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 1,
    bits: [
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
      29
    ],
    [
      31
    ]
  ],
  "description": "In the PowerPC UISA, the sc instruction calls the operating system to perform a service.\nWhen control is returned to the program that executed the system call, the content of the\nregisters depends on the register conventions used by the program providing the system\nservice.\nThis instruction is context synchronizing, as described in Section 4.1.5.1, “Context\nSynchronizing Instructions,” in the PowerPC Microprocessor Family: The Programming\nEnvironments manual.\nOther registers altered:\n• Dependent on the system service\nIn PowerPC OEA, the sc instruction does the following:\nSRR0 ¬iea CIA + 4\nSRR1[1-41-4, 10-151] ¬ 0\nSRR1[0,5-9, 16-23, 25-27, 30-31] ¬ MSR[0,5-9, 16-23, 25-27, 30-31]\nMSR ¬ new_value (see below)\nNIA ¬iea base_ea + 0xC00 (see below)\nThe EA of the instruction following the sc instruction is placed into SRR0. Bits 0,\n5-9,16-23, 25-27, and 30-31 of the MSR are placed into the corresponding bits of SRR1,\nand bits 1-4 and 10-15 of SRR1 are set to undefined values.\nNOTE: An implementation may define additional MSR bits, and in this case, may also cause\nthem to be saved to SRR1 from MSR on an exception and restored to MSR from SRR1\non an rfi; then a system call exception is generated. The exception causes the MSR to\nbe altered as described in Section 6.4, “Exception Definitions” in The Programming\nEnvironments Manual.\nThe exception causes the next instruction to be fetched from offset 0xC00 from the physical\nbase address determined by the new setting of MSR[IP]."
}