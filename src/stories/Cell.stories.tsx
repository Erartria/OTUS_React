import type { Meta, StoryObj } from "@storybook/react";
import { CellProps, Cell } from "../components/Cell";

const meta: Meta<CellProps> = {
  title: "Cell",
  component: Cell,
};

type Story = StoryObj<CellProps>;

//👇 Throws a type error it the args don't match the component props
const Alive: Story = {
  args: {
    type: "alive",
  },
};
const Born: Story = {
  args: {
    type: "born",
  },
};
const Dead: Story = {
  args: {
    type: "dead",
  },
};

export default meta;
export { Alive, Born, Dead };
