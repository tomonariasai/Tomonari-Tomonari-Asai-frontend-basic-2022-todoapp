import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Molecules/Task",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  onEditComplete: (taskName) => console.log("taskname changed", taskName),
  taskName: "taskname",
  onTaskComplete: () => console.log("task completed"),
  defaultIsEditing: false,
};
