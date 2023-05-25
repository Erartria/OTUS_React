import { act, render, screen } from "@testing-library/react";
import React from "react";
import { Board, BoardProps } from "../components/Board";
import { CellType, cellTypesArray } from "../components/Cell";

describe("Board", () => {
  let propsArr: BoardProps[] = [
    { size: { width: 5, height: 5 } },
    { size: { width: 10, height: 10 } },
    { size: { width: 16, height: 16 } },
  ];
  propsArr.forEach((props) => {
    it(`Renders board with sizes: ${props.size.width}x${props.size.height}`, () => {
      render(<Board size={props.size} />);

      //Document contains width * height number of elements
      const elements = screen.getAllByRole("cell");
      expect(elements).toHaveLength(props.size.width * props.size.height);
    });
  });

  propsArr = [
    {
      size: { width: 5, height: 5 },
      board: Array(5).fill(Array(5).fill("alive")),
    },
    {
      size: { width: 10, height: 10 },
      board: Array(10).fill(Array(10).fill("dead")),
    },
    {
      size: { width: 16, height: 16 },
      board: Array(16).fill(Array(16).fill("born")),
    },
  ];
  propsArr.forEach((props) => {
    it(`Renders game board with fields: ${stringifyFields(
      props.board
    )}`, () => {
      render(<Board size={props.size} board={props.board} />);

      //Document contains width * height number of elements
      const elements = screen.getAllByRole("cell");
      expect(elements).toHaveLength(props.size.width * props.size.height);

      const expectedMap = createMapForMatrix(props.board);
      const actualMap = createMapForHtml(elements);
      expectedMap.forEach((val, key) => {
        //`Expected ${key} fields for cell with type ${EGameFieldType[val]}`
        expect(actualMap.get(key)).toEqual(expectedMap.get(key));
      });
    });
  });

  propsArr = [
    {
      size: { width: 5, height: 5 },
      board: Array(5).fill(Array(5).fill("alive")),
    },
    {
      size: { width: 5, height: 5 },
      board: Array(5).fill(Array(5).fill("dead")),
    },
    {
      size: { width: 5, height: 5 },
      board: Array(5).fill(Array(5).fill("born")),
    },
  ] as Required<BoardProps>[];

  (propsArr as Required<BoardProps>[]).forEach((props) => {
    const currentCellType = props.board[0][0];
    const expectedCellType = nextType(currentCellType);
    it(`Click on ${currentCellType} changing to ${expectedCellType}`, () => {
      render(<Board size={props.size} board={props.board} />);

      //Document contains width * height number of elements
      const elements = screen.getAllByRole("cell");
      expect(elements).toHaveLength(props.size.width * props.size.height);

      const firstElement = elements[0];
      const currentClassNameRegex = new RegExp(currentCellType, "i");
      expect(firstElement.className).toMatch(currentClassNameRegex);

      //По факту await
      act(() => {
        firstElement.click();
      });
      const expectedClassNameRegex = new RegExp(expectedCellType, "i");
      expect(firstElement.className).toMatch(expectedClassNameRegex);
    });
  });
});

function createMapForMatrix(fields?: CellType[][]): Map<CellType, number> {
  const result: Map<CellType, number> = new Map();
  fields?.forEach((row) => {
    row.forEach((cell) => {
      if (result.has(cell)) {
        const prevCount: number = result.get(cell) as number;
        result.set(cell, prevCount + 1);
      } else {
        result.set(cell, 1);
      }
    });
  });
  return result;
}

function createMapForHtml(elements: HTMLElement[]): Map<CellType, number> {
  const result: Map<CellType, number> = new Map();
  elements.forEach((el) => {
    const classNames = el.classList.toString();
    cellTypesArray.forEach((cellType) => {
      const regex = new RegExp(cellType, "i");
      if (classNames.match(regex)) {
        if (result.has(cellType)) {
          const prevCount: number = result.get(cellType) as number;
          result.set(cellType, prevCount + 1);
        } else {
          result.set(cellType, 1);
        }
      }
    });
  });
  return result;
}

function stringifyFields(fields?: CellType[][]): string {
  let result = "";
  fields?.forEach((row) => {
    result += JSON.stringify(row);
  });
  return result;
}

function nextType(type: CellType): CellType {
  switch (type) {
    case "alive":
      return "dead";
    case "dead":
      return "born";
    case "born":
      return "alive";
  }
}
