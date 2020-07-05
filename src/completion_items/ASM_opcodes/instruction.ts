//#region field implementations
export const spr = {
    label: "spr",
    description: `This field is used to specify a special-purpose register for the mtspr and mfspr instructions. The
  encoding is described in Section 4.4.2.2, “Move to/from Special-Purpose Register Instructions
  (OEA)”, in the PowerPC Microprocessor Family: The Programming Environments manual.`,
    bits: [11, 20],
    displayType: 'constant',
    registerConstants: {
        9: "CTR",
        1013: "DABR",
        19: "DAR",
        537: "DBAT0L",
        536: "DBAT0U",
        539: "DBAT1L",
        538: "DBAT1U",
        541: "DBAT2L",
        540: "DBAT2U",
        543: "DBAT3L",
        542: "DBAT3U",
        22: "DEC",
        18: "DSISR",
        282: "EAR",
        529: "IBAT0L",
        528: "IBAT0U",
        531: "IBAT1L",
        530: "IBAT1U",
        533: "IBAT2L",
        532: "IBAT2U",
        535: "IBAT3L",
        534: "IBAT3U",
        8: "LR",
        287: "PVR",
        25: "SDR1",
        272: "SPRG0",
        273: "SPRG1",
        274: "SPRG2",
        275: "SPRG3",
        26: "SRR0",
        27: "SRR1",
        268: "TBL_U",
        284: "TBL_S",
        269: "TBU_U",
        285: "TBU_S",
        1: "XER",
        923: "DMAL",
        922: "DMAU",
        912: "GQR0",
        913: "GQR1",
        914: "GQR2",
        915: "GQR3",
        916: "GQR4",
        917: "GQR5",
        918: "GQR6",
        919: "GQR7",
        1008: "HID0",
        1009: "HID1",
        920: "HID2",
        1010: "IABR",
        1019: "ICTC",
        1017: "L2CR",
        952: "MMCR0",
        956: "MMCR1",
        953: "PMC1",
        954: "PMC2",
        957: "PMC3",
        958: "PMC4",
        955: "SIA",
        1020: "THRM1",
        1021: "THRM2",
        1022: "THRM3",
        936: "UMMCR0",
        940: "UMMCR1",
        937: "UPMC1",
        938: "UPMC2",
        941: "UPMC3",
        942: "UPMC4",
        939: "USIA",
        921: "WPAR"
    }
};
export const tbr = {
    label: "tbr",
    description: `This field is used to specify either the time base lower (TBL) or time base upper (TBU).
  maintains the time of day and operates interval timers
  clocked at 1/4th frequency of bus clock`,
    bits: [11, 20],
    displayType: 'constant',
    registerConstants: {
        268: "TBL",
        269: "TBU"
    }
};
export const AA = {
    label: "AA",
    description: `Absolute address bit.
  0 The immediate field represents an address relative to the current instruction address (CIA). (For
    more information on the CIA, see Table 12-3.) The effective (logical) address of the branch is
    either the sum of the LI field sign-extended to 32 bitsand the address of the branch instruction or
    the sum of the BD field sign-extended to 32 bits and the address of the branch instruction.
  1 The immediate field represents an absolute address. The effective address (EA) of the branch is
    the LI field sign-extended to 32 bitsor the BD field sign-extended to 32 bits.
  Note: The LI and BD fields are sign-extended to 32 bits.`,
    bits: [30],
    displayType: 'boolean',
    validate(value: any) {return (value === "true" || value === "false" || value == 0 || value == 1);}
};
export const BD = {
    label: "BD",
    description: `Immediate field specifying a 14-bit signed two's complement branch displacement that is
  concatenated on the right with 0b00 and sign-extended to 32 bits.`,
    bits: [16, 29],
    displayType: 'hex',
    validate(value: any) {return parseInt(value, 16) <= 16383;}
};
export const BI = {
    label: "BI",
    description: `This field is used to specify a bit in the CR to be used as the condition of a branch conditional
  instruction.`,
    bits: [11, 15],
    displayType: 'hex',
    validate(value: any) {return parseInt(value, 16) <= 16}
};
export const BO = {
    label: "BO",
    description: `This field is used to specify options for the branch conditional instructions. The encoding is
  described in Section 4.2.4.2, “Conditional Branch Control” in the PowerPC Microprocessor Family:
  The Programming Environments manual.`,
    bits: [6, 10],
    displayType: 'binary',
    validate(value: any) {return Object.keys(this.values).includes(value)},
    values: {
        '00000': 'Decrement the CTR, then branch if the decremented CTR 0 and the condition is FALSE.',
        '00010': 'Decrement the CTR, then branch if the decremented CTR = 0 and the condition is FALSE.',
        '00100': 'Branch if the condition is FALSE',
        '01000': 'Decrement the CTR, then branch if the decremented CTR 0 and the condition is TRUE.',
        '01010': 'Decrement the CTR, then branch if the decremented CTR = 0 and the condition is TRUE.',
        '01100': 'Branch if the condition is TRUE.',
        '10000': 'Decrement the CTR, then branch if the decremented CTR 0.',
        '10010': 'Decrement the CTR, then branch if the decremented CTR = 0.',
        '10100': 'Branch always.'
    }
};
export const crbA = {
    label: "crbA",
    description: `This field is used to specify a bit in the CR to be used as a source.`,
    bits: [11, 15],
    displayType: 'register',
    validate(value: any) {return value <= 31},
    prefix: "crb"

};
export const crbB = {
    label: "crbB",
    description: `This field is used to specify a bit in the CR to be used as a source.`,
    bits: [16, 20],
    displayType: 'register',
    validate(value: any) {return value <= 31},
    prefix: "crb"
};
export const crbD = {
    label: "crbD",
    description: `This field is used to specify a bit in the CR, or in the FPSCR, as the destination of the result of an
  instruction.`,
    bits: [6, 10],
    displayType: 'register',
    validate(value: any) {return value <= 15},
    prefix: "crb"
};
export const crfD = {
    label: "crfD",
    description: `This field is used to specify one of the CR fields, or one of the FPSCR fields, as a destination.`,
    bits: [6, 8],
    displayType: 'register',
    validate(value: any) {return value <= 7},
    prefix: "crf"
};
export const crfS = {
    label: "crfS",
    description: `This field is used to specify one of the CR fields, or one of the FPSCR fields, as a source.`,
    bits: [11, 13],
    displayType: 'register',
    validate(value: any) {return value <= 7},
    prefix: "crf"
};
export const CRM = {
    label: "CRM",
    description: `This field mask is used to identify the CR fields that are to be updated by the mtcrf instruction.`,
    bits: [12, 19],
    displayType: 'register',
    validate(value: any) {return value <= 255},
    prefix: "crm"
};
export const d = (bitType: any) => {
    return {
        label: "d",
        description: `Immediate field specifying a signed two's complement integer that is sign-extended to 32 bits.`,
        bits: [[16, 31], [20, 31]][bitType],
        displayType: 'immediate',
        validate(value: any) {return value < 2 ** (this.bits[1] - this.bits[0]) - 1}
    }
};
export const FM = {
    label: "FM",
    description: `This field mask is used to identify the FPSCR fields that are to be updated by the mtfsf instruction.`,
    bits: [7, 14],
    displayType: 'binary',
    validate(value: any) {return value <= 255}
};
export const frA = {
    label: "frA",
    description: `This field is used to specify an FPR as a source.`,
    bits: [11, 15],
    displayType: 'register',
    validate(value: any) {return value <= 31},
    prefix: "fpr"
};
export const frB = {
    label: "frB",
    description: `This field is used to specify an FPR as a source.`,
    bits: [16, 20],
    displayType: 'register',
    validate(value: any) {return value <= 31},
    prefix: "fpr"
};
export const frC = {
    label: "frC",
    description: `This field is used to specify an FPR as a source.`,
    bits: [21, 25],
    displayType: 'register',
    validate(value: any) {return value <= 31},
    prefix: "fpr"
};
export const frD = {
    label: "frD",
    description: `This field is used to specify an FPR as a destination.`,
    bits: [6, 10],
    displayType: 'register',
    validate(value: any) {return value <= 31},
    prefix: "fpr"
};
export const frS = {
    label: "frS",
    description: `This field is used to specify an FPR as a source.`,
    bits: [6, 10],
    displayType: 'register',
    validate(value: any) {return value <= 31},
    prefix: "fpr"
};
export const I = (bitType: any) => {
    return {
        label: "I",
        description: `This field is used to specify a GQR control register that is used by the paired single load or store
    instructions.`,
        bits: [[17, 19], [22, 24]][bitType],
        displayType: 'register',
        validate(value: any) {return value <= 7},
        prefix: 'gqr'
    }
};
export const IMM = {
    label: "IMM",
    description: `Immediate field used as the data to be placed into a field in the FPSCR.`,
    bits: [16, 19],
    displayType: 'immediate',
    validate(value: any) {return value <= 15}
};
export const LI = {
    label: "LI",
    description: `Immediate field specifying a 24-bit signed two's complement integer that is concatenated on the
  right with 0b00 and sign-extended to 32 bits.`,
    bits: [6, 29],
    displayType: 'signed_immediate',
    validate(value: any) {return -8388608 <= value && value <= 8388607}
};
export const LK = {
    label: "LK",
    description: `Link bit.
  0 Does not update the link register (LR).
  1 Updates the LR. If the instruction is a branch instruction, the address of the instruction following
  the branch instruction is placed into the LR.`,
    bits: [31],
    displayType: 'boolean',
    validate(value: any) {return (value === "true" || value === "false" || value == 0 || value == 1);}
};
export const MB = {
    label: "MB",
    description: `These fields are used in rotate instructions to specify a 32-bit mask in the PowerPC
  Microprocessor Family: The Programming Environments manual.`,
    bits: [21, 25],
    displayType: 'binary',
    validate(value: any) {return value <= 0b11111}
};
export const ME = {
    label: "ME",
    description: `These fields are used in rotate instructions to specify a 32-bit mask in the PowerPC
  Microprocessor Family: The Programming Environments manual.`,
    bits: [26, 30],
    displayType: 'binary',
    validate(value: any) {return value <= 0b11111}
};
export const NB = {
    label: "NB",
    description: `This field is used to specify the number of bytes to move in an immediate string load or store.`,
    bits: [16, 20],
    displayType: 'immediate',
    validate(value: any) {return value <= 31}
};
export const OE = {
    label: "OE",
    description: `This field is used for extended arithmetic to enable setting OV and SO in the XER.`,
    bits: [21],
    displayType: 'boolean',
    validate(value: any) {return (value === "true" || value === "false" || value == 0 || value == 1);}
};
export const OPCD = {
    label: "OPCD",
    description: `Primary opcode field`,
    bits: [0, 5],
    displayType: 'hidden',
};
export const rA = {
    label: "rA",
    description: `This field is used to specify a GPR to be used as a source or destination.`,
    bits: [11, 15],
    displayType: 'register',
    validate(value: any) {return value <= 31},
    prefix: 'gpr'
};
export const rB = {
    label: "rB",
    description: `This field is used to specify a GPR to be used as a source or destination.`,
    bits: [16, 20],
    displayType: 'register',
    validate(value: any) {return value <= 31},
    prefix: 'gpr'
};
export const Rc = {
    label: "Rc",
    description: `Record bit.
  0 Does not update the condition register (CR).
  1 Updates the CR to reflect the result of the operation.
  For integer instructions, CR bits 0–2 are set to reflect the result as a signed quantity and CR bit
  3 receives a copy of the summary overflow bit, XER[SO]. The result as an unsigned quantity or
  a bit string can be deduced from the EQ bit. For floating-point instructions, CR bits 4–7 are set
  to reflect floating-point exception, floating-point enabled exception, floating-point invalid
  operation exception, and floating-point overflow exception.
  (Note that exceptions are referred to as interrupts in the architecture specification.)`,
    bits: [31],
    displayType: 'boolean',
    validate(value: any) {return (value === "true" || value === "false" || value == 0 || value == 1);}
};
export const rD = {
    label: "rD",
    description: `This field is used to specify a GPR to be used as a destination.`,
    bits: [6, 10],
    displayType: 'register',
    validate(value: any) {return value <= 31},
    prefix: 'gpr'
};
export const rS = {
    label: "rS",
    description: `This field is used to specify a GPR to be used as a source.`,
    bits: [6, 10],
    displayType: 'register',
    validate(value: any) {return value <= 31},
    prefix: 'gpr'
};
export const SH = {
    label: "SH",
    description: `This field is used to specify a shift amount.`,
    bits: [16, 20],
    displayType: 'immediate',
    validate(value: any) {return value <= 31}
};
export const SIMM = {
    label: "SIMM",
    description: `This immediate field is used to specify a 16-bit signed integer.`,
    bits: [16, 31],
    displayType: 'signed_immediate',
    validate(value: any) {return -32768 <= value && value <= 32767}
};
export const SR = {
    label: "SR",
    description: `This field is used to specify one of the 16 segment registers.`,
    bits: [12, 15],
    displayType: 'register',
    validate(value: any) {return value <= 15},
    prefix: 'seg'
};
export const TO = {
    label: "TO",
    description: `This field is used to specify the conditions on which to trap. The encoding is described in Section
  4.2.4.6, “Trap Instructions” iin the PowerPC Microprocessor Family: The Programming
  Environments manual.`,
    bits: [6, 10],
    displayType: 'binary',
    validate(value: any) {return value <= 0b11111}
};
export const UIMM = {
    label: "UIMM",
    description: `This immediate field is used to specify a 16-bit unsigned integer.`,
    bits: [16, 31],
    displayType: 'immediate',
    validate(value: any) {return value <= 65535}
};
export const XO = (bitType: any) => {
    return {
        label: "XO",
        description: `Extended opcode field.`,
        bits: [[21, 30], [22, 30], [25, 30], [26, 30]][bitType],
        displayType: 'hidden'
    }
};
export const target_addr = (bitType: any) => {
    return {
        label: "target_addr",
        description: `the target address`,
        bits: [[6, 29], [16, 29]][bitType],
        displayType: 'address',
        validate(value: any) {return value < 2 ** (this.bits[1] - this.bits[0]) - 1}
    }
};
//#endregion

//#region field alias implementations
export const BA = {
    label: "BA",
    equivalency: crbA
};
export const BB = {
    label: "BB",
    equivalency: crbB
};
export const BT = {
    label: "BT",
    equivalency: crbD
};
export const BF = {
    label: "BF",
    equivalency: crfD
};
export const BFA = {
    label: "BFA",
    equivalency: crfS
};
export const D = (bitType: any) => {
    return {
        label: "D",
        equivalency: d(bitType)
    }
};
// const DS: fieldAlias = {
//   label: "DS",
//   equivalency: ds
// }
export const FLM = {
    label: "FLM",
    equivalency: FM
};
export const FRA = {
    label: "FRA",
    equivalency: frA
};
export const FRB = {
    label: "FRB",
    equivalency: frB
};
export const FRC = {
    label: "FRC",
    equivalency: frC
};
export const FRT = {
    label: "FRT",
    equivalency: frD
};
export const FRS = {
    label: "FRS",
    equivalency: frS
};
export const FXM = {
    label: "FXM",
    equivalency: CRM
};
export const RA = {
    label: "RA",
    equivalency: rA
};
export const RB = {
    label: "RB",
    equivalency: rB
};
export const RT = {
    label: "RT",
    equivalency: rD
};
export const RS = {
    label: "RS",
    equivalency: rS
};
export const SI = {
    label: "SI",
    equivalency: SIMM
};
export const U = {
    label: "U",
    equivalency: IMM
};
export const UI = {
    label: "UI",
    equivalency: UIMM
};


//#endregion
