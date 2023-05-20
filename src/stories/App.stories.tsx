import type { Meta, StoryObj } from "@storybook/react";
import { App, TAppProps } from "../components/App";

const meta: Meta<TAppProps> = {
  title: "App",
  component: App,
};

type Story = StoryObj<TAppProps>;

//👇 Throws a type error it the args don't match the component props
const AppStory: Story = {
  args: {
    text: "Mocked text",
  },
};

export default meta;
export { AppStory };
