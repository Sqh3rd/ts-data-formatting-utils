import { toFormattedTable } from "./implementations/formatted-table";
import { Timeable } from "./interfaces";

export const formattedTimeableTable = <T extends Timeable>(
  timeables: Array<T>,
  durations: { warn: number; critical: number },
) => {
  let table = toFormattedTable(timeables);
  for (let i = 0; i < table.columns["duration"].values.length; i++) {
    let duration = parseInt(table.columns["duration"].values[i]);
    let col = "";
    if (duration < durations.warn) {
      col = "\x1B[93m";
    } else if (durations.warn <= duration && duration < durations.critical) {
      col = "\x1B[33m";
    } else {
      col = "\x1B[31m";
    }
    table.lines[i] = `${col}${table.lines[i]}\x1B[m`;
  }
  return table.toString();
};

export const compareStrings = (s1: string, s2: string) => {
  if (s1 < s2) return -1;
  else if (s2 > s1) return 1;
  else return 0;
};
