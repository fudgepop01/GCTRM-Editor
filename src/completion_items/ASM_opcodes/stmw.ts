import {rS, rA, d} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "stmw",
  "fullName": "Store Multiple Word",
  "baseHex": "BC000000",
  "opcode": "101111",
  "parameters": [

    rS,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "n consecutive words starting at EA are stored from the GPRs rS through r31. For example, if\nrS = 30, 2 words are stored.\nEA must be a multiple of four. If it is not, either the system alignment exception handler is\ninvoked or the results are boundedly undefined. For additional information about alignment\nand DSI exceptions, see Section 6.4.3, “DSI Exception (0x00300),” in the PowerPC\nMicroprocessor Family: The Programming Environments manual..\nNOTE: In some implementations, this instruction is likely to have a greater latency and take\nlonger to execute, perhaps much longer, than a sequence of individual store instructions\nthat produce the same results."
}