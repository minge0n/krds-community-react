import type { Meta, StoryObj } from "@storybook/react-vite";
import { LanguageSwitcher } from "./index";
import "./language-switcher.css";

const meta: Meta<typeof LanguageSwitcher> = {
  title: "Components/LanguageSwitcher",
  component: LanguageSwitcher,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LanguageSwitcher>;

export const Default: Story = {
  args: {
    languages: [
      { code: "ko", label: "한국어" },
      { code: "en", label: "English" },
      { code: "zh", label: "中文" },
      { code: "ja", label: "日本語" },
    ],
    value: "ko",
  },
};

export const English: Story = {
  args: {
    languages: [
      { code: "ko", label: "한국어" },
      { code: "en", label: "English" },
    ],
    value: "en",
  },
};
