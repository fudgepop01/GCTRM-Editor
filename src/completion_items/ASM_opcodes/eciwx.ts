import {rD, rB, rA} from './instruction';

const pseudocode = `
if (rA == 0) {
  b = 0
}
else {
  b = (rA)
}
EA = b + (rB)
paddr = address translation of EA
send load word request for paddr to device identified by EAR[RID]
rD = word from device
`;

export default {
  "mnemonic": "eciwx",
  "fullName": "External Control In Word Indexed",
  "baseHex": "7C00026C",
  "opcode": "011111",
  "parameters": [

    rD,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 310,
    bits: [
      21,
      30
    ]
  },
  "reserved": 31,
  "description": "The eciwx instruction and the EAR register can be very efficient when mapping special devices\nsuch as graphics devices that use addresses as pointers.\n    if rA = 0\n    then b ¬ 0\n    else b¬ (rA)\n    EA ¬ b + (rB)\n    paddr ¬ address translation of EA\n    send load word request for paddr to device identified by EAR[RID]\n    rD ¬ word from device\nEA is the sum (rA|0) + (rB).\nA load word request for the physical address (referred to as real address in the architecture\nspecification) corresponding to EA is sent to the device identified by EAR[RID], bypassing the\ncache. The word returned by the device is placed in rD.\nEAR[E] must be 1. If it is not, a DSI exception is generated.\nEA must be a multiple of four. If it is not, one of the following occurs:\n• A system alignment exception is generated.\n• A DSI exception is generated (possible only if EAR[E] = 0).\n• The results are boundedly undefined.\nThe eciwx instruction is supported for EAs that reference memory segments in which SR[T] = 1(or\nSTE[T] = 1) and for EAs mapped by the DBAT registers. If the EA references a direct-store\nsegment (SR[T] = 1 or STE[T] = 1), either a DSI exception occurs or the results are boundedly\nundefined. However, note that the direct-store facility is being phased out of the architecture and\nwill not likely be supported in future devices. Thus, software should not depend on its effects.\nIf this instruction is executed when MSR[DR] = 0 (real addressing mode), the results are boundedly\nundefined.\nThis instruction is treated as a load from the addressed byte with respect to address translation,\nmemory protection, referenced and changed bit recording, and the ordering performed by eieio.\nThis instruction is optional in the PowerPC architecture."
}