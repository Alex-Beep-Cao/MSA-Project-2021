import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "./Msa-header";

export default {
  title: "UI Components/Header",
  component: Header,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;
export const MsaHeader = Template.bind({});
