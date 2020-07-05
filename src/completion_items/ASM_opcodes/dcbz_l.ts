import {rA, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "dcbz_l",
  "fullName": "Data Cache Block Set to Zero Locked",
  "baseHex": "100007EC",
  "opcode": "000100",
  "parameters": [

    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 1014,
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
  "description": "EA is the sum (rA|0) + (rB).\nIf HID2[LCE] = 0 then the invalid instruction error handler is envolked.\nWhen HID2[LCE] = 1, the dcbz_l instruction executes as follows:\n• If the cache block containing the byte addressed by EA is neither in the “locked” nor in the\n“normal” data cache, the block is allocated in the “locked” data cache without fetching the\nblock from main memory. All bytes are cleared and the block is marked as M (modified).\nCache block allocation is done using the psudo-LRU used rule among the four ways in the\nlocked cache.\n• If the cache block containing the byte addressed by EA is already either in the “locked” or in\nthe “normal” data cache, all bytes are cleared and the block is marked M (modified). The\nhardware indicates this situation by setting HID2[DCHERR] to 1 and raising a Machine\nCheck condition as described in Section 9.2.2.2.1, in the PowerPC Microprocessor Family:\nThe Programming Environments manual.\n• The dcbz_l instruction is not forwarded to the L2 cache nor the 60x bus for broadcast.\nNOTE: The data cache should be invalidated prior to setting HID2[LCE]=1."
}