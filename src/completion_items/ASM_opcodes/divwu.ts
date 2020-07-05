import {rD, rA, rB, OE, Rc} from './instruction';

const pseudocode = `
dividend = (rA)
divisor = (rB)
rD = dividend / divisor [[ ? ]]
`;

export default {
  "mnemonic": "divwu",
  "fullName": "Divide Word Unsigned",
  "baseHex": "7C000396",
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
    value: 459,
    bits: [
      22,
      30
    ]
  },
  "reserved": null,
  "description": "The dividend is the contents of rA. The divisor is the contents of rB. The remainder is not supplied\nas a result.\nBoth operands and the quotient are interpreted as unsigned integers, except that if Rc = 1 the first three\nbits of CR0 field are set by signed comparison of the result to zero. The quotient is the unique\nunsigned integer that satisfies the equation—dividend = (quotient * divisor) + r (where 0 r < divisor).\nIf an attempt is made to perform the division—<anything> 0—then the contents of rD are undefined\nas are the contents of the LT, GT, and EQ bits of the CR0 field (if Rc = 1). In this case, if OE = 1 then\nOV is set.\nThe 32-bit unsigned remainder of dividing the contents of rA by the contents of rB can be computed\nas follows:\ndivwurD,rA,rB #rD = quotient\nmullw rD,rD,rB #rD = quotient * divisor\nsubf rD,rD,rA #rD = remainder"
}