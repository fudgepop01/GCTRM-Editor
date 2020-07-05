import {rS, rA, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "stwcx.",
  "fullName": "Store Word Conditional Indexed",
  "baseHex": "7C00012D",
  "opcode": "011111",
  "parameters": [

    rS,
    rA,
    rB
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
      31
    ]
  ],
  "description": "EA is the sum (rA|0) + (rB). If the reserved bit is set, the stwcx. instruction stores rS to\neffective address (rA + rB), clears the reserved bit, and sets CR0[EQ]. If the reserved bit\nis not set, the stwcx. instruction does not do a store; it leaves the reserved bit cleared and\nclears CR0[EQ]. Software must look at CR0[EQ] to see if the stwcx. was successful.\nThe reserved bit is set by the lwarx instruction. The reserved bit is cleared by any stwcx.\ninstruction to any address, and also by snooping logic if it detects that another processor\ndoes any kind of write or invalidate to the block indicated in the reservation buffer when\nreserved is set.\nEA must be a multiple of four. If it is not, either the system alignment exception handler is\ninvoked or the results are boundedly undefined. For additional information about alignment\nand DSI exceptions, see Section 6.4.3, “DSI Exception (0x00300),” in the PowerPC\nMicroprocessor Family: The Programming Environments manual.\nThe granularity with which reservations are managed is implementation-dependent.\nTherefore, the memory to be accessed by the load and reserve and store conditional\ninstructions should be controlled by a system library program.\nBecause the hardware doesn’t compare reservation address when executing the stwcx.\ninstruction, operating systems software MUST reset the reservation if an exception or other\ntype of interrupt occurs to insure atomic memory references of lwarx and stwcx. pairs."
}