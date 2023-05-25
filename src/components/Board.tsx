import React from "react";
import { Cell, CellType, cellTypesArray } from "./Cell";

import s from "./Board.module.sass";

type BoardSize =
  | {
      width: 5;
      height: 5;
    }
  | {
      width: 10;
      height: 10;
    }
  | {
      width: 16;
      height: 16;
    };

type BoardProps = {
  size: BoardSize;
  board?: CellType[][];
};
type BoardState = {
  board: CellType[][];
};

class Board extends React.Component<BoardProps, BoardState> {
  constructor(props: BoardProps) {
    super(props);
    this.state = this.getStateByProps(props);

    this.getStateByProps = this.getStateByProps.bind(this);
    this.cellClickHandle = this.cellClickHandle.bind(this);
  }

  public render(): React.ReactNode {
    return (
      <>
        <div
          style={{
            gridTemplateRows: `repeat(${this.props.size.width}, 1fr)`,
            gridTemplateColumns: `repeat(${this.props.size.height}, 1fr)`,
          }}
          className={s.root}
        >
          {this.state.board.map((rows, i) =>
            rows.map((col, k) => (
              <Cell
                type={this.state.board[i][k]}
                key={`${i}-${k}`}
                onClick={() => this.cellClickHandle(i, k)}
              />
            ))
          )}
        </div>
      </>
    );
  }

  private cellClickHandle(row: number, column: number) {
    const newBoard: CellType[][] = JSON.parse(JSON.stringify(this.state.board));
    const changingValue = newBoard[row][column];

    newBoard[row][column] = Board.nextCellType(changingValue);
    this.setState(() => {
      return { board: newBoard };
    });
  }

  public static nextCellType(currentType: CellType): CellType {
    switch (currentType) {
      case "alive":
        return "dead";
      case "dead":
        return "born";
      case "born":
        return "alive";
    }
  }

  private getStateByProps(props: BoardProps): BoardState {
    let result: BoardState;
    if (
      !!props.board &&
      props.board.length == props.size.height &&
      props.board[0].length == props.size.width
    ) {
      result = {
        board: props.board,
      };
    } else if (!props.board) {
      const mockedFields = Array(props.size.width).fill(
        Array(props.size.height).fill(cellTypesArray[0])
      );
      result = {
        board: mockedFields,
      };
    } else {
      throw Error(`Can't initialize ${this.constructor.name}`);
    }

    return result;
  }
}

export { Board, BoardProps, BoardState };
