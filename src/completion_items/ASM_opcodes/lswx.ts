import {rD, rA, rB} from './instruction';

const pseudocode = `
if (rA == 0) {
  b = 0
}
else {
  b = (rA)
}
EA = b + (rB)
n = XER[25-31]
r = rD - 1
i = 0
rD = undefined
while (n > 0) {
  if (i = 0) {
    r = r + 1 (mod 32)
    GPR(r) = (32)0
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
  "mnemonic": "lswx",
  "fullName": "Load String Word Indexed",
  "baseHex": "7C00042A",
  "opcode": "011111",
  "parameters": [

    rD,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 533,
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
  "description": "EA is the sum (rA|0) + (rB). Let n = XER[25–31]; n is the number of bytes to load. Let\nnr = CEIL(n 4); nr is the number of registers to receive data. If n > 0, n consecutive bytes\nstarting at EA are loaded into GPRs rD through rD + nr – 1. Bytes are loaded left to right\nin each register. The sequence of registers wraps around through r0 if required. If the four\nbytes of rD + nr – 1 are only partially filled, the unfilled low-order byte(s) of that register\nare cleared. If n = 0, the contents of rD are undefined.\nIf rA or rB is in the range of registers specified to be loaded, including the case in which\nrA = 0, either the system illegal instruction error handler is invoked or the results are\nboundedly undefined. If rD = rA or rD = rB, the instruction form is invalid; If rD and rA\nboth specify GPR0, the form is invalid.\nUnder certain conditions (for example, segment boundary crossing) the data alignment\nexception handler may be invoked. For additional information about data alignment\nexceptions, see Section 6.4.3, “DSI Exception (0x00300),” in The Programming\nEnvironments Manual.\nNOTE: In some implementations, this instruction is likely to have a greater latency and\ntake longer to execute, perhaps much longer, than a sequence of individual load or store\ninstructions that produce the same results."
}