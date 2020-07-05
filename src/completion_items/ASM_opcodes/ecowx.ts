import {rS, rA, rB} from './instruction';

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
  "mnemonic": "ecowx",
  "fullName": "External Control Out Word Indexed",
  "baseHex": "7C00036C",
  "opcode": "011111",
  "parameters": [

    rS,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 438,
    bits: [
      21,
      30
    ]
  },
  "reserved": 31,
  "description": "The ecowx instruction and the EAR register can be very efficient when mapping special devices such\nas graphics devices that use addresses as pointers.\n    if rA = 0\n    then b ¬ 0\n    else b ¬ (rA)\n    EA ¬ b + (rB)\n    paddr ¬ address translation of EA\n    send store word request for paddr to device identified by EAR[RID]\n    send rS to device\nEA is the sum (rA|0) + (rB).\nA store word request for the physical address corresponding to EA and the contents of rS are sent to\nthe device identified by EAR[RID], bypassing the cache.\nEAR[E] must be 1, if it is not, a DSI exception is generated.\nEA must be a multiple of four. If it is not, one of the following occurs:\n• A system alignment exception is generated.\n• A DSI exception is generated (possible only if EAR[E] = 0).\n• The results are boundedly undefined.\nThe ecowx instruction is supported for effective addresses that reference memory segments in which\nSR[T] = 0 or STE[T] = 0), and for EAs mapped by the DBAT registers. If the EA references a\ndirect-store segment (SR[T] = 1 or STE[T] = 1), either a DSI exception occurs or the results are\nboundedly undefined. However, note that the direct-store facility is being phased out of the\narchitecture and will not likely be supported in future devices. Thus, software should not depend on\nits effects.\nIf this instruction is executed when MSR[DR] = 0 (real addressing mode), the results are boundedly\nundefined.\nThis instruction is treated as a store from the addressed byte with respect to address translation,\nmemory protection, and referenced and changed bit recording, and the ordering performed by eieio.\nNote that software synchronization is required in order to ensure that the data access is performed in\nprogram order with respect to data accesses caused by other store or ecowx instructions, even though\nthe addressed byte is assumed to be caching-inhibited and guarded.\nThis instruction is optional in the PowerPC architecture."
}