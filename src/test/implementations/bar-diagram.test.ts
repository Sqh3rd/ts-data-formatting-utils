import {
  barDiagramWithRanges,
  barDiagramWithSections,
  generateEntriesByRangesFromInput,
  generateEntriesBySectionsFromInput,
} from "../../main/implementations/bar-diagram";

describe("bar-diagram", () => {
  let max = 100_000;
  let height = 10;

  describe("range bar-diagrams", () => {
    test("amount of values > height", () => {
      let entries = [...Array(max).keys()].map((i) => {
        if (i % 5 === 0) return 100;
        if (i % 7 === 0) return 800;
        return 500;
      });
      console.log(
        barDiagramWithRanges(
          generateEntriesByRangesFromInput(entries, [250, 500, 750]),
          height
        )
      );
    });
    test("amount of values < height", () => {
      let entries = [...Array(height).keys()].map((i) => { if (i% 3) return 100; return 500;});
      console.log(barDiagramWithRanges(
        generateEntriesByRangesFromInput(entries, [250, 500, 750]), height
      ));
    })
  });

  test("print section bar-diagram", () => {
    let entries = [...Array(max).keys()].map((i) => {
      if (i % 5 === 0) return "VW";
      else if (i % 3 === 0) return "MERCEDES";
      else return "BMW";
    });
    console.log(
      barDiagramWithSections(generateEntriesBySectionsFromInput(entries), 10)
    );
  });
});
