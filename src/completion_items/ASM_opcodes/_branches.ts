import { rD, rA, rB, OE, Rc} from './instruction';

// 8*13+20+6*6 = 160 from these alone

const conditions = {
  lt: "less than",
  le: "less than or equal",
  eq: "equal",
  ge: "greater than or equal",
  gt: "greater than",
  nl: "not less than",
  ne: "not equal",
  ng: "not greater than",
  so: "summary overflow",
  ns: "not summary overflow",
  un: "unordered (after floating-point comparison)",
  nu: "not unordered (after floating-point comparison)"
};

const LR = [true, false];

const branchTypes = {
  bc: "relative",
  bca: "absolute",
  bclr: "to LR",
  bcctr: "to CTR",
}

const out = [];

for (const [branchType, btText] of Object.entries(branchTypes)) {
  for (const [condition, condText] of Object.entries(conditions)) {
    for (const LRCondition of LR) {
      let toPush = branchType;
      toPush = toPush.replace('bc', "b" + condition);
      if (toPush === 'bca') {
        toPush = toPush.replace('a', 'l') + 'a';
      } else {
        toPush += 'l';
      }
      out.push({
        name: toPush
      })
    }
  }
}