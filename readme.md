# ts-data-formatting-utils

This is a library for formatting data using only ts

## Table of Contents

- [Visualization](#Visualization)
    - [Table](#Table)
        - [Formatted Table](#Formatted-Table)
    - [Diagrams](#Diagrams)
        - [Bar Diagram](#Bar-Diagram)
            - [General](#General)
            - [Range](#Range)
            - [Sections](#Sections)

# Visualization

## Table

### Formatted Table

```typescript
let testArray = [
    { name: "asdf", value: 1 },
    { name: "something else indeed", value: 100 },
];
toFormattedTable(testArray).toFormattedString();
```

```
┌───────────────────────┬───────┐
│         name          │ value │
├───────────────────────┼───────┤
│ asdf                  │ 1     │
│ something else indeed │ 100   │
└───────────────────────┴───────┘
```

## Diagrams

### Bar Diagram

#### General

If the max amount does not equal or exceed the max height passed to the function
the diagram will use a lower height, otherwise it'd get fucked. Cheers

```typescript
let dataArray = [100 * 6, 500 * 4];
let range = [250, 500, 750];
let barDiagramEntries = generateEntriesByRangesFromInput(dataArray, range);
let maxHeight = 10;

barDiagramWithRanges(barDiagramEntries, maxHeight);
```

Even tho maxHeight is set to 10, the height of the bar diagram body is lower

```
      6
6 │─ ▄▄▄ ──────────
  │  ███  4        
4 │─ ███ ▄▄▄ ──────
  │  ███ ███       
2 │─ ███ ███ ──────
  │  ███ ███  0    
0 ┴─┼▀▀▀┼▀▀▀┼───┼──
   100 250 500 750
```

#### Range

Visualize how many entries have a value in the given range

```typescript
let dataArray = [100 * 20_000, 500 * 80_000];
let range = [250, 500, 750]
let barDiagramEntries = generateEntriesByRangesFromInput(dataArray, range); 
let maxHeight = 10;

barDiagramWithRanges(barDiagramEntries, maxHeight);
```

with the above code snippet the following output string is generated

```
                80000
81000 │──────── ▄▄▄▄▄ ─────────
      │         █████
64800 │──────── █████ ─────────
      │         █████
48600 │──────── █████ ─────────
      │         █████
32400 │──────── █████ ─────────
      │   20000 █████
16200 │── █████ █████ ─────────
      │   █████ █████   0      
    0 ┴──┼▀▀▀▀▀┼▀▀▀▀▀┼─────┼───
        100   250   500   750
```

**Note**: If an entry is above or below the extremes in the range the value is
added in the diagram

#### Sections

Visualize how many entries have the same string

```typescript
let dataArray = ["BMW" * 53_333, "MERCEDES" * 26_667, "VW" * 20_000];
let barDiagramEntries = generateEntriesBySectionsFromInput(dataArray);
let maxHeight = 10;

barDiagramWithSections(barDiagramEntries, maxHeight);
```

```
             53333
54000 │──── ▄▄▄▄▄▄▄▄ ──────────────────────
      │     ████████
43200 │──── ████████ ──────────────────────
      │     ████████
32400 │──── ████████  26667   ─────────────
      │     ████████ ▄▄▄▄▄▄▄▄  20000
21600 │──── ████████ ████████ ▄▄▄▄▄▄▄▄ ────
      │     ████████ ████████ ████████
10800 │──── ████████ ████████ ████████ ────
      │     ████████ ████████ ████████
    0 ┴────┼▀▀▀▀▀▀▀▀┼▀▀▀▀▀▀▀▀┼▀▀▀▀▀▀▀▀┼────
              BMW    MERCEDES    VW
```
