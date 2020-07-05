import {rD, rA, NB} from './instruction';

const pseudocode = `
if (rA == 0) {
  EA = 0
}
else {
  EA = (rA)
}
if (NB == 0) {
  n = 32
}
else {
  n = NB
}
r = rD - 1
i = 0
while (n > 0) {
  if (i = 0) {
    r = r + 1 (mod 32)
    GPR(r) = 0
  }
  GPR(r)[i, i + 7] = MEM(EA, 1)
  i = i + 8
  if (i == 32) {
    i = 0
  }
  EA = EA + 1
  n = n - 1
}
`;

export default {
  "mnemonic": "lswi",
  "fullName": "Load String Word Immediate",
  "baseHex": "7C0004AA",
  "opcode": "011111",
  "parameters": [

    rD,
    rA,
    NB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 597,
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
  "description": "EA is (rA|0).\nLet n = NB if NB 0,n = 32 if NB = 0; n is the number of bytes to load.\nLet nr = CEIL(n , 4);nr is the number of registers to be loaded with data.\nn consecutive bytes starting at EA are loaded into GPRs rD through rD + nr – 1.\nBytes are loaded left to right in each register. The sequence of registers wraps around to r0 if\nrequired. If the 4 bytes of register rD + nr – 1 are only partially filled, the unfilled low-order\nbyte(s) of that register are cleared.\nIf rA is in the range of registers specified to be loaded, including the case in which rA = 0,\nthe instruction form is invalid.\nUnder certain conditions (for example, segment boundary crossing) the data alignment\nexception handler may be invoked. For additional information about data alignment exceptions,\nsee Section 6.4.3, “DSI Exception (0x00300),” in The Programming Environments\nManual. Note that, in some implementations, this instruction is likely to have greater latency\nand take longer to execute, perhaps much longer, than a sequence of individual load or store\ninstructions that produce the same results."
}