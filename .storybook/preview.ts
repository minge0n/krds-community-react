import type { Preview } from "@storybook/react-vite";
import "../src/styles/base.css";
import "../src/styles/tokens.css";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
