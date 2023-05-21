import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Cell, cellTypesArray } from "../components/Cell";
import userEvent from "@testing-library/user-event";

describe("Cell", () => {
  //iterate throught cellType

  it(`Renders Cell components with cell role`, () => {
    render(<Cell type={cellTypesArray[0]} />);

    const cellElement = screen.getByRole("cell");
    expect(cellElement).toBeInTheDocument();
  });

  cellTypesArray.forEach((cellType) => {
    it(`Renders Cell components with ${cellType} cell type`, () => {
      render(<Cell type={cellType} />);

      const cellElement = screen.getByRole("cell");
      expect(cellElement).toBeInTheDocument();
      //Classname contains case intensive type name
      const classNameRegex = new RegExp(cellType, "i");
      expect(cellElement.className).toMatch(classNameRegex);
    });
  });

  it(`onClick function calls on element click`, async () => {
    const mock = {
      onClick: jest.fn(),
    };
    render(<Cell type={cellTypesArray[0]} onClick={mock.onClick} />);

    //Document contains element
    const element = await screen.findByRole("cell");
    expect(element).toBeInTheDocument();

    expect(mock.onClick).toHaveBeenCalledTimes(0);

    userEvent.click(element);

    expect(mock.onClick).toHaveBeenCalledTimes(1);
  });
});
