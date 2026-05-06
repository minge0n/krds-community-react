import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./index";
import "./badge.css";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "기본",
  },
};

export const OutlineVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Badge variant="outline-primary">Primary</Badge>
      <Badge variant="outline-secondary">Secondary</Badge>
      <Badge variant="outline-gray">Gray</Badge>
      <Badge variant="outline-point">Point</Badge>
      <Badge variant="outline-danger">Danger</Badge>
      <Badge variant="outline-warning">Warning</Badge>
      <Badge variant="outline-success">Success</Badge>
      <Badge variant="outline-information">Information</Badge>
      <Badge variant="outline-disabled">Disabled</Badge>
    </div>
  ),
};

export const BackgroundVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Badge variant="bg-primary">Primary</Badge>
      <Badge variant="bg-secondary">Secondary</Badge>
      <Badge variant="bg-gray">Gray</Badge>
      <Badge variant="bg-point">Point</Badge>
      <Badge variant="bg-danger">Danger</Badge>
      <Badge variant="bg-warning">Warning</Badge>
      <Badge variant="bg-success">Success</Badge>
      <Badge variant="bg-information">Information</Badge>
      <Badge variant="bg-disabled">Disabled</Badge>
    </div>
  ),
};

export const LightBackgroundVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Badge variant="bg-light-primary">Primary</Badge>
      <Badge variant="bg-light-secondary">Secondary</Badge>
      <Badge variant="bg-light-gray">Gray</Badge>
      <Badge variant="bg-light-point">Point</Badge>
      <Badge variant="bg-light-danger">Danger</Badge>
      <Badge variant="bg-light-warning">Warning</Badge>
      <Badge variant="bg-light-success">Success</Badge>
      <Badge variant="bg-light-information">Information</Badge>
      <Badge variant="bg-light-disabled">Disabled</Badge>
    </div>
  ),
};

export const NumberBadge: Story = {
  args: {
    children: "5",
    number: true,
  },
};
