import React from "react";
import { Story, Meta } from "@storybook/react";
import Sidebar from "./Sidebar";

export default {
  title: "UI Components/SideBar",
  component: Sidebar,
} as Meta;

const Template: Story = () => <Sidebar />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    __typename: "User",
    id: "1",
    name: "John Doe",
    gitHub: "johndoe",
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
