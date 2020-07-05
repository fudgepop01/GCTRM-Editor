import {rD, rA, rB, OE, Rc} from './instruction';

const pseudocode = `
dividend = (rA)
divisor = (rB)
rD = dividend / divisor
`;

export default {
  "mnemonic": "divw",
  "fullName": "Divide Word",
  "baseHex": "7C0003D6",
  "opcode": "011111",
  "parameters": [

    rD,
    rA,
    rB
  ],
  "modifiers": [
    OE,
    Rc
  ],
  pseudocode,
  "extension": {
    value: 491,
    bits: [
      22,
      30
    ]
  },
  "reserved": null,
  "description": "The dividend is the contents of rA. The divisor is the contents of rB. The remainder is not supplied\nas a result. Both the operands and the quotient are interpreted as signed integers. The quotient is\nthe unique signed integer that satisfies the equation—dividend = (quotient * divisor) + r where 0\nr < |divisor| (if the dividend is non-negative), and –|divisor| < r 0 (if the dividend is negative).\nIf an attempt is made to perform either of the divisions—0x8000_0000 –1 or\n<anything> 0, then the contents of rD are undefined, as are the contents of the LT, GT, and EQ bits\nof the CR0 field (if Rc = 1). In this case, if OE = 1 then OV is set.\nThe 32-bit signed remainder of dividing the contents of rA by the contents of rB can be computed\nas follows, except in the case that the contents of rA = –231 and the contents of rB = –1.\ndivw rD,rA,rB# rD = quotient\nmullw rD,rD,rB# rD = quotient * divisor\nsubf rD,rD,rA# rD = remainder"
}