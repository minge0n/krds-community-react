import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumb, BreadcrumbItem } from "./index";
import "./breadcrumb.css";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem home href="/">홈</BreadcrumbItem>
      <BreadcrumbItem href="/services">서비스</BreadcrumbItem>
      <BreadcrumbItem href="/services/guide">이용 안내</BreadcrumbItem>
      <BreadcrumbItem current>현재 페이지</BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const TwoLevels: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem home href="/">홈</BreadcrumbItem>
      <BreadcrumbItem current>민원 서비스</BreadcrumbItem>
    </Breadcrumb>
  ),
};
