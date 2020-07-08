import * as vscode from 'vscode';
import { sep } from 'path';
import { readFile } from 'fs';
import { promisify } from 'util';
import sora_melee from './module_maps/sora_melee';

const pReadFile = promisify(readFile);

let mapData: {
  [key: number]: string | {
    offset: string;
    size: string;
    fileOffset: string;
    label: string;
  };
};

const loadMaps = async () => {
  mapData = {};

  const mapPath = vscode.workspace.getConfiguration('gctrm').get('mappath') as string;
  let mapFilePath;
  if (mapPath === 'internal') {
    mapFilePath = sora_melee;
  } else if (mapPath.startsWith('.')) {
    mapFilePath = vscode.workspace.getWorkspaceFolder(vscode.window.activeTextEditor!.document.uri)?.uri.path + mapPath.substring(1);
  } else {
    mapFilePath = mapPath;
  }
  if (sep === '\\' && mapFilePath.startsWith('/')) {
    mapFilePath = mapFilePath.substring(mapFilePath.indexOf('/') + 1);
  }

  const lines =
    ((mapFilePath === sora_melee) ? sora_melee : await pReadFile(mapFilePath, 'utf8'))
    .replace(/\r/g, '')
    .split('\n')
    .map(l => l.split(' '));

  for (const line of lines) {
    if (!/[0-9a-fA-F]{8}/g.test(line[0])) { continue; }

    if (line.length === 5) {
      mapData[parseInt(line[0], 16)] = {
        offset: line[0],
        size: line[1],
        fileOffset: line[2],
        label: line[4]
      };
    } else {
      mapData[parseInt(line[0], 16)] = line[1];
    }
  }
  return mapData;
};

export const getMapData = async () => {
  if (mapData) { return mapData; }
  else { return await loadMaps(); }
};

export const mapsAsCompletionItems = async (): Promise<vscode.CompletionItem[]> => {
  const out: vscode.CompletionItem[] = [];
  mapData = mapData || await loadMaps();

  for (const [offset, data] of Object.entries(mapData)) {

    const offsetStr = parseInt(offset).toString(16).padStart(8, '0');
    if (typeof data === 'string') {
      out.push({
        label: data,
        sortText: offsetStr,
        documentation: new vscode.MarkdownString(`offset: \`${offsetStr}\`;\n\nlabel:\n\n\`${data}\``),
        filterText: offsetStr,
        insertText: offsetStr
      });
    } else {
      out.push({
        label: data.label,
        sortText: offsetStr,
        documentation: new vscode.MarkdownString(`offset: 0x\`${offsetStr}\`; \n\n size: 0x\`${data.size}\` \n\n label: \`${data.label}\``),
        filterText: offsetStr,
        insertText: offsetStr
      })
    }

  }

  return out;
};

export const getLastMappedFunctionFromOffset = async (offset: number) => {
  mapData = mapData || await loadMaps();

  // https://stackoverflow.com/a/50692096
  const binaryKeySearch = (keys: number[], low: number, high: number, target: number): number => {
    if (low > high) { return -1; }
    if (target >= keys[high]) { return high; }

    const mid = Math.floor((low + high)/2);

    if (keys[mid] === target) { return mid; }

    if (mid > 0 && keys[mid] <= target && target < keys[mid]) {
      return mid - 1;
    }

    if (target < keys[mid]) {
      return binaryKeySearch(keys, low, mid - 1, target);
    }

    return binaryKeySearch(keys, mid + 1, high, target);
  };

  const mapKeys = Object.keys(mapData).map(k => parseInt(k));
  const key = mapKeys[binaryKeySearch(mapKeys, 0, mapKeys.length, offset)];

  if (typeof mapData[key] === 'string') {
    return `
last mapped item: \`${mapData[key]}\`

last mapped offset: \`${key.toString(16).padStart(8, '0')}\`;

offset from offset: \`${(offset - key).toString(16).padStart(8, '0')}\`
`;
  } else {
    return `
last mapped item: \`${(mapData as any)[key].label}\`;

last mapped offset: \`${(mapData as any)[key].offset}\`;

offset from offset: \`${(offset - parseInt((mapData as any)[key].offset, 16)).toString(16).padStart(8, '0')}\`

last mapped size: \`${(mapData as any)[key].size}\`
`;
  }
};