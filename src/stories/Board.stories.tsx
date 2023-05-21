import type { Meta, StoryObj } from "@storybook/react";
import { Board, BoardProps } from "../components/Board";

const meta: Meta<BoardProps> = {
  title: "Board",
  component: Board,
  argTypes: {
    size: {
      options: [0, 1, 2],
      mapping: [
        { width: 5, height: 5 },
        { width: 10, height: 10 },
        { width: 16, height: 16 },
      ],
      control: {
        type: "radio",
        labels: ["5x5", "10x10", "16x16"],
      },
    },
  },
};

type Story = StoryObj<BoardProps>;

//👇 Throws a type error it the args don't match the component props
const Board16x16: Story = {
  name: "Board 16 x 16",
  args: {
    size: {
      width: 16,
      height: 16,
    },
  },
};

const Board10x10: Story = {
  name: "Board 10 x 10",
  args: {
    size: {
      width: 10,
      height: 10,
    },
  },
};

const Board5x5: Story = {
  name: "Board 5 x 5",
  args: {
    size: {
      width: 5,
      height: 5,
    },
  },
};

export default meta;
export { Board16x16, Board10x10, Board5x5 };
