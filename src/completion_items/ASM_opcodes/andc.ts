import { Rc} from "./instruction";
import { rA } from "./instruction";
import { rS } from "./instruction";
import { rB } from "./instruction";

const pseudocode = `
rA = (rS) & ¬ (rB)
`;

export default {
  "mnemonic": "andc",
  "fullName": "AND with Complement",
  "baseHex": "7C000078",
  "opcode": "011111",
  "parameters": [ rA, rS, rB ],
  "modifiers": [ Rc ],
  pseudocode,
  "extension": {
    value: 60,
    bits: [
      21,
      30
    ]
  },
  "reserved": null,
  "description": "The contents of rS are ANDed with the one’s complement of the contents of rB and the result is\nplaced into rA."
}