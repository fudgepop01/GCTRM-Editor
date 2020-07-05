import {OPCD} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "rfi",
  "fullName": "Return from Interrupt",
  "baseHex": "4C000064",
  "opcode": "010011",
  "parameters": [
    OPCD
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 50,
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
  "description": "Bits SRR1[0,5-9,16–23, 25–27, 30–31] are placed into the corresponding bits of the MSR.\nMSR[13] is set to 0. If the new MSR value does not enable any pending exceptions, then the\nnext instruction is fetched, under control of the new MSR value, from the address\nSRR0[0–29] || 0b00. If the new MSR value enables one or more pending exceptions, the\nexception associated with the highest priority pending exception is generated; in this case the\nvalue placed into SRR0 by the exception processing mechanism is the address of the\ninstruction that would have been executed next had the exception not occurred. Note that an\nimplementation may define additional MSR bits, and in this case, may also cause them to be\nsaved to SRR1 from MSR on an exception and restored to MSR from SRR1 on an rfi.\nThis is a supervisor-level, context synchronizing instruction."
}