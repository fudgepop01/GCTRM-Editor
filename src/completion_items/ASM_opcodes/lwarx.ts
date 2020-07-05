import {rD, rA, rB} from './instruction';

const pseudocode = `
if (rA == 0) {
  b = 0
}
else {
  b = (rA)
}
EA = b + (rA)
RESERVE = 1
RESERVE_ADDR = physical_addr(EA)
rD = MEM(EA,4)
`;

export default {
  "mnemonic": "lwarx",
  "fullName": "Load Word and Reserve Indexed",
  "baseHex": "7C000028",
  "opcode": "011111",
  "parameters": [

    rD,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 20,
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
  "description": "EA is the sum (rA|0) + (rB).\nThe word in memory addressed by EA is loaded into rD.\nThis instruction creates a reservation for use by a store word conditional indexed\n(stwcx.)instruction. The physical address computed from EA is associated with the\nreservation, and replaces any address previously associated with the reservation.\nEA must be a multiple of four. If it is not, either the system alignment exception handler is\ninvoked or the results are boundedly undefined. For additional information about alignment\nand DSI exceptions, see Section 6.4.3, “DSI Exception (0x00300),” in The Programming\nEnvironments Manual.\nWhen the RESERVE bit is set, the processor enables hardware snooping for the block of\nmemory addressed by the RESERVE address. If the processor detects that another processor\nwrites to the block of memory it has reserved, it clears the RESERVE bit. The stwcx.\ninstruction will only do a store if the RESERVE bit is set. The stwcx. instruction sets the\nCR0[EQ] bit if the store was successful and clears it if it failed. The lwarx and stwcx.\ncombination can be used for atomic read-modify-write sequences. Note that the atomic\nsequence is not guaranteed, but its failure can be detected if CR0[EQ] = 0 after the stwcx.\ninstruction."
}