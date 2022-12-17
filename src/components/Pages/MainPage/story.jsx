import React from "react";
import Component from "./index";
import AlertManager from "../../../components/Organisms/AlertManager";
import { AlertHandlerProvider } from "../../../contexts/alert_handler";

export default {
  component: Component,
  title: "Pages/MainPage",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => (
  <AlertHandlerProvider>
    <AlertManager />
    <Component />
  </AlertHandlerProvider>
);

export const Default = Template.bind({});
Default.args = {};
