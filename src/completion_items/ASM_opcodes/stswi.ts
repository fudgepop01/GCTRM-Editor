import {rS, rA, NB} from './instruction';

const pseudocode = `
undefined
`;

export default {
  "mnemonic": "stswi",
  "fullName": "Store String Word Immediate",
  "baseHex": "7C0005AA",
  "opcode": "011111",
  "parameters": [

    rS,
    rA,
    NB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 725,
    bits: [
      21,
      30
    ]
  },
  "reserved": null,
  "description": "EA is (rA|0). Let n = NB if NB not_equal0, n = 32 if NB = 0; n is the number of bytes to\nstore. Let nr = CEIL(n / 4);nr is the number of registers to supply data.\nn consecutive bytes starting at EA are stored from GPRs rS through rS + nr – 1 Bytes are\nstored left to right from each register. The sequence of registers wraps around through r0 if\nrequired.\nUnder certain conditions (for example, segment boundary crossing) the data alignment\nexception handler may be invoked. For additional information about data alignment\nexceptions, see Section 6.4.3, “DSI Exception (0x00300),” in the PowerPC Microprocessor\nFamily: The Programming Environments manual.\nNOTE: In some implementations, this instruction is likely to have a greater latency and take\nlonger to execute, perhaps much longer, than a sequence of individual store instructions\nthat produce the same results."
}