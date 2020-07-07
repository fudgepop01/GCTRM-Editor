import * as vscode from 'vscode';
import opcodes from './completion_items/ASM_opcodes/_index';

const dArgHandler = (data: any, i: number, label: string) => {
  if (i+1 !== data.parameters.length
    && label === 'rA'
    && data.parameters[i+1].label
    && data.parameters[i+1].label === 'd') {
    return `(?<d>0x[0-9a-fA-F]+|-?\\d+)\\s*?\\(r?(?<rA>-?\\d+?)\\)`;
  }
  else {
    switch (label) {
      case 'rA':
      case 'rB':
      case 'rD':
      case 'rS':
        return `r?(?<${label}>-?\\d+)`;
      case 'frA':
      case 'frB':
      case 'frC':
      case 'frD':
      case 'frS':
        return `f?(?<${label}>-?\\d+)`;
      case 'crfS':
      case 'crfD':
        return `(?:Cr)?(?<${label}>-?\\d+)`;
      default:
        return `(?<${label}>-?0x[0-9a-fA-F]+|-?\\d+)`;
    }
  }
};

const regexObj: { [key: string]: { regex: string; args: Object[]; } } = {};
for (const [key, data] of Object.entries(opcodes)) {
  const opcode = data.mnemonic;
  const params = (data.parameters as any[]).flatMap((p: any, i) => {
    const label = (typeof p === 'function') ? p(0).label : p.label;
    if (label === 'd') { return []; }
    return dArgHandler(data, i, label);
  }).join('\\s*,\\s*');
  regexObj[opcode] = {
    regex: `${opcode.replace(/\./g, '\\.')}\\s*${params}`,
    args: data.parameters
  }

  const simple = (data as any)['simple'] as typeof opcodes.addic.simple;
  if (simple) {
    for (const d of simple) {
      const ps = d.parameters.flatMap((p: any, i) => {
        const label = (typeof p === 'function') ? p(0).label : p.label;
        if (label === 'd') { return []; }
        return dArgHandler(d, i, label);
      }).join('\\s*,\\s*');
      regexObj[d.name] = {
        regex: `${d.name.replace(/\./g, '\\.')}\\s*${ps}`,
        args: d.parameters
      }
    }
  }
}

const argFormatter = (args: any[], result: RegExpExecArray) => {
  let out = [];
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    switch (arg.label) {
      case 'rA':
        if (args[i+1] && args[i+1].label === 'd') {
          let num = parseInt(result.groups!['d']);
          const shouldBeNeg = num < 0;
          if (shouldBeNeg) { num = Math.abs(num); }
          out.push(`${shouldBeNeg ? '-' : ''}0x${num.toString(16).padStart(2, '0').toUpperCase()}(r${parseInt(result.groups!['rA'])})`);
          i += 1;
        } else {
          out.push(`r${parseInt(result.groups!['rA'])}`);
        }
        break;
      case 'rB':
      case 'rD':
      case 'rS':
        out.push(`r${parseInt(result.groups![arg.label])}`);
        break;
      case 'frA':
      case 'frB':
      case 'frC':
      case 'frD':
      case 'frS':
        out.push(`f${parseInt(result.groups![arg.label])}`);
        break;
      case 'crfS':
      case 'crfD':
        out.push(`Cr${parseInt(result.groups![arg.label])}`);
        break;
      default:
        let num = parseInt(result.groups![arg.label]);
        const shouldBeNeg = num < 0;
        if (shouldBeNeg) { num = Math.abs(num); }
        out.push(`${shouldBeNeg ? '-' : ''}0x${num.toString(16).padStart(2, '0').toUpperCase()}`);
        break;
    }
  }
  return ' ' + out.join(', ');
}

export const autoFormat = () => {
  const activeEditor = vscode.window.activeTextEditor;
  if (!activeEditor) { return; }
  const startLine = activeEditor.selection.start.line;
  const endLine = activeEditor.selection.end.line + 1;
  let fullText = activeEditor.document.getText();
  const allLines = fullText?.replace(/\r/g, '').split('\n');

  const lines =
    (activeEditor.selection.isEmpty)
    ? allLines
    : allLines.splice(startLine, endLine - startLine);

  let out = '';
  for (let line of lines) {
    const startWord = line.trim().substring(0, line.trim().indexOf(' '));
    if (regexObj[startWord]) {
      const lineRegex = new RegExp(`(?<fullmatch>${regexObj[startWord].regex})`, 'gi');
      const result = lineRegex.exec(line);

      if (result) {
        const formatted = startWord + argFormatter(regexObj[startWord].args, result);
        line = line.replace(result.groups!.fullmatch, formatted);
      }
    }
    out += line + '\n';
  }
  activeEditor.edit((builder) => {
    builder.setEndOfLine(vscode.EndOfLine.LF);
    if (activeEditor.selection.isEmpty) {
      builder.replace(new vscode.Range(
        new vscode.Position(0, 0),
        activeEditor.document.lineAt(activeEditor.document.lineCount - 1).range.end
      ), out);
    } else {
      builder.replace(new vscode.Range(
        new vscode.Position(startLine, 0),
        new vscode.Position(endLine, 0)
      ), out);
    }
  });
};