export default {
  spr: `
### Description:

This field is used to specify a special-purpose register for the mtspr and mfspr instructions. The
encoding is described in Section 4.4.2.2, “Move to/from Special-Purpose Register Instructions
(OEA)”, in the PowerPC Microprocessor Family: The Programming Environments manual.

### Register Constants

number | register
---|---
9 | CTR
1013 | DABR
19 | DAR
537 | DBAT0L
536 | DBAT0U
539 | DBAT1L
538 | DBAT1U
541 | DBAT2L
540 | DBAT2U
543 | DBAT3L
542 | DBAT3U
22 | DEC
18 | DSISR
282 | EAR
529 | IBAT0L
528 | IBAT0U
531 | IBAT1L
530 | IBAT1U
533 | IBAT2L
532 | IBAT2U
535 | IBAT3L
534 | IBAT3U
8 | LR
287 | PVR
25 | SDR1
272 | SPRG0
273 | SPRG1
274 | SPRG2
275 | SPRG3
26 | SRR0
27 | SRR1
268 | TBL_U
284 | TBL_S
269 | TBU_U
285 | TBU_S
1 | XER
923 | DMAL
922 | DMAU
912 | GQR0
913 | GQR1
914 | GQR2
915 | GQR3
916 | GQR4
917 | GQR5
918 | GQR6
919 | GQR7
1008 | HID0
1009 | HID1
920 | HID2
1010 | IABR
1019 | ICTC
1017 | L2CR
952 | MMCR0
956 | MMCR1
953 | PMC1
954 | PMC2
957 | PMC3
958 | PMC4
955 | SIA
1020 | THRM1
1021 | THRM2
1022 | THRM3
936 | UMMCR0
940 | UMMCR1
937 | UPMC1
938 | UPMC2
941 | UPMC3
942 | UPMC4
939 | USIA
921 | WPAR
`,
  tbr: `
### Description:

This field is used to specify either the time base lower (TBL) or time base upper (TBU).
maintains the time of day and operates interval timers clocked at 1/4th frequency of bus clock

## Register Constants
number | register
---|---
268 | TBL
269 | TBU
`,
  AA: `
### Description:

Absolute Address Bit

when set to 0:

The immediate field represents an address relative to the current instruction address (CIA). (For
more information on the CIA, see Table 12-3.) The effective (logical) address of the branch is
either the sum of the LI field sign-extended to 32 bitsand the address of the branch instruction or
the sum of the BD field sign-extended to 32 bits and the address of the branch instruction.

when set to 1:

The immediate field represents an absolute address. The effective address (EA) of the branch is
the LI field sign-extended to 32 bitsor the BD field sign-extended to 32 bits.

**Note**: The LI and BD fields are sign-extended to 32 bits.
`,
  BD: `
### Description:

Immediate field specifying a 14-bit signed two's complement branch displacement that is
concatenated on the right with 0b00 and sign-extended to 32 bits.
`,
  BI: `
### Description:

This field is used to specify a bit in the CR to be used as the condition of a branch conditional
instruction.
`,
  BO: `
### Description:

This field is used to specify options for the branch conditional instructions. The encoding is
described in Section 4.2.4.2, “Conditional Branch Control” in the PowerPC Microprocessor Family:
The Programming Environments manual.

### Valid Values:

value | description
---|---
00000 | Decrement the CTR, then branch if the decremented CTR 0 and the condition is FALSE.
00010 | Decrement the CTR, then branch if the decremented CTR = 0 and the condition is FALSE.
00100 | Branch if the condition is FALSE
01000 | Decrement the CTR, then branch if the decremented CTR 0 and the condition is TRUE.
01010 | Decrement the CTR, then branch if the decremented CTR = 0 and the condition is TRUE.
01100 | Branch if the condition is TRUE.
10000 | Decrement the CTR, then branch if the decremented CTR 0.
10010 | Decrement the CTR, then branch if the decremented CTR = 0.
10100 | Branch always.
`,
  crbA: `
### Description:

This field is used to specify a bit in the CR to be used as a source.
`,
  crbB: `
### Description:

This field is used to specify a bit in the CR to be used as a source.
`,
  crbD: `
### Description:

This field is used to specify a bit in the CR, or in the FPSCR, as the destination of the result of an
instruction.
`,
  crfD: `
### Description:

This field is used to specify one of the CR fields, or one of the FPSCR fields, as a destination.
`,
  crfS: `
### Description:

This field is used to specify one of the CR fields, or one of the FPSCR fields, as a source.
`,
  CRM: `
### Description:

This field mask is used to identify the CR fields that are to be updated by the mtcrf instruction.
`,
  d: `
### Description:

Immediate field specifying a signed two's complement integer that is sign-extended to 32 bits.
`,
  FM: `
### Description:

This field mask is used to identify the FPSCR fields that are to be updated by the mtfsf instruction.
`,
  frA: `
### Description:

This field is used to specify an FPR as a source.
`,
  frB: `
### Description:

This field is used to specify an FPR as a source.
`,
  frC: `
### Description:

This field is used to specify an FPR as a source.
`,
  frD: `
### Description:

This field is used to specify an FPR as a **destination**.
`,
  frS: `
### Description:

This field is used to specify an FPR as a source.
`,
  I: `
### Description:

This field is used to specify a GQR control register that is used by the paired single load or store
instructions.
`,
  IMM: `
### Description:

Immediate field used as the data to be placed into a field in the FPSCR.
`,
  LI: `
### Description:

Immediate field specifying a 24-bit signed two's complement integer that is concatenated on the
right with 0b00 and sign-extended to 32 bits.
`,
  LK: `
### Description:

Link Bit.

when set to 0:

Does not update the link register (LR).

when set to 1:

Updates the LR. If the instruction is a branch instruction, the address of the instruction following
  the branch instruction is placed into the LR.
`,
  MB: `
### Description:

These fields are used in rotate instructions to specify a 32-bit mask in the PowerPC
Microprocessor Family: The Programming Environments manual.
`,
  ME: `
### Description:

These fields are used in rotate instructions to specify a 32-bit mask in the PowerPC
Microprocessor Family: The Programming Environments manual.
`,
  NB: `
### Description:

This field is used to specify the number of bytes to move in an immediate string load or store.
`,
  OE: `
### Description:

This field is used for extended arithmetic to enable setting OV and SO in the XER.
`,
  OPCD: `
### Description:

Primary opcode field
`,
  rA: `
### Description:

This field is used to specify a GPR to be used as a source or destination.
`,
  rB: `
### Description:

This field is used to specify a GPR to be used as a source or destination.
`,
  Rc: `
### Description:

Record bit.

when set to 0:

Does not update the condition register (CR).

when set to 1:

Updates the CR to reflect the result of the operation.

For integer instructions, CR bits 0–2 are set to reflect the result as a signed quantity and CR bit
3 receives a copy of the summary overflow bit, XER[SO]. The result as an unsigned quantity or
a bit string can be deduced from the EQ bit. For floating-point instructions, CR bits 4–7 are set
to reflect floating-point exception, floating-point enabled exception, floating-point invalid
operation exception, and floating-point overflow exception.

**Note:** exceptions are referred to as interrupts in the architecture specification.
`,
  rD: `
### Description:

This field is used to specify a GPR to be used as a destination.
`,
  rS: `
### Description:

This field is used to specify a GPR to be used as a source.
`,
  SH: `
### Description:

This field is used to specify a shift amount.
`,
  SIMM: `
### Description:

This immediate field is used to specify a 16-bit signed integer.
`,
  SR: `
### Description:

This field is used to specify one of the 16 segment registers.
`,
  TO: `
### Description:

This field is used to specify the conditions on which to trap. The encoding is described in Section
4.2.4.6, “Trap Instructions” iin the PowerPC Microprocessor Family: The Programming
Environments manual.
`,
  UIMM: `
### Description:

This immediate field is used to specify a 16-bit unsigned integer.
`,
  XO: `
### Description:

Extended opcode field.
`,
  target_addr: `
### Description:

the target address
`
};