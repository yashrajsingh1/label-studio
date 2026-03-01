import { addons } from "storybook/manager-api";
import { create } from "storybook/theming/create";

const theme = create({
  base: "dark",
  brandTitle: "Mercedes-Benz",
  brandUrl: "https://www.mercedes-benz.com",
  brandImage: "logo.svg",
  brandTarget: "_blank",
});

addons.setConfig({
  theme,
});
