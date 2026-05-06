import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/docs/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  framework: "@storybook/react-vite",
};

export default config;
