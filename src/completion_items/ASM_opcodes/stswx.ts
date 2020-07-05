import {rS, rA, rB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "stswx",
  "fullName": "Store String Word Indexed",
  "baseHex": "7C00052A",
  "opcode": "011111",
  "parameters": [

    rS,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 661,
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
  "description": "EA is the sum (rA|0) + (rB). Let n = XER[25–31]; n is the number of bytes to store. Let\nnr = CEIL(n / 4);nr is the number of registers to supply data.\nn consecutive bytes starting at EA are stored from GPRs rS through rS + nr – 1. Bytes are\nstored left to right from each register. The sequence of registers wraps around through r0 if\nrequired. If n = 0, no bytes are stored.\nUnder certain conditions (for example, segment boundary crossing) the data alignment\nexception handler may be invoked. For additional information about data alignment\nexceptions, see Section 6.4.3, “DSI Exception (0x00300),” in the PowerPC Microprocessor\nFamily: The Programming Environments manual.\nNOTE: In some implementations, this instruction is likely to have a greater latency and take\nlonger to execute, perhaps much longer, than a sequence of individual store instructions\nthat produce the same results."
}