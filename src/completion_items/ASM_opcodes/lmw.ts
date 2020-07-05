import {rD, rA, d} from './instruction';

const pseudocode = `
if (rA == 0) {
  b = 0
}
else {
  b = (rA)
}
EA = b + EXTS(d)
r = rD
while (r <= 31) {
  GPR(r) = MEM(EA, 4)
  r = r + 1
  EA = EA + 4
}
`;

export default {
  "mnemonic": "lmw",
  "fullName": "Load Multiple Word",
  "baseHex": "B8000000",
  "opcode": "101110",
  "parameters": [

    rD,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "EA is the sum (rA|0) + d.\nn = (32 – rD).\nn consecutive words starting at EA are loaded into GPRs rD through r31.\nEA must be a multiple of four. If it is not, either the system alignment exception handler is\ninvoked or the results are boundedly undefined. For additional information about alignment\nand DSI exceptions, see Section 6.4.3, “DSI Exception (0x00300),” in The Programming\nEnvironments Manual.\nIf rA is in the range of registers specified to be loaded, including the case in which rA = 0,\nthe instruction form is invalid.\nNote that, in some implementations, this instruction is likely to have a greater latency and\ntake longer to execute, perhaps much longer, than a sequence of individual load or store\ninstructions that produce the same results."
}