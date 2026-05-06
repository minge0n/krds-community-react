import type { Meta, StoryObj } from "@storybook/react-vite";
import { HelpPanel } from "./index";
import "./help-panel.css";

const meta: Meta<typeof HelpPanel> = {
  title: "Components/HelpPanel",
  component: HelpPanel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HelpPanel>;

export const Default: Story = {
  args: {
    open: true,
    title: "도움말",
    children: (
      <div>
        <p>이 페이지에서는 다음과 같은 작업을 수행할 수 있습니다:</p>
        <ul>
          <li>신규 민원 접수</li>
          <li>기존 민원 조회</li>
          <li>처리 현황 확인</li>
        </ul>
      </div>
    ),
  },
};

export const RightPosition: Story = {
  args: {
    open: true,
    title: "안내",
    position: "right",
    children: <p>오른쪽에 표시되는 도움말 패널입니다.</p>,
  },
};

export const LeftPosition: Story = {
  args: {
    open: true,
    title: "안내",
    position: "left",
    children: <p>왼쪽에 표시되는 도움말 패널입니다.</p>,
  },
};

export const Closed: Story = {
  args: {
    open: false,
    title: "도움말",
    children: <p>이 패널은 닫혀 있습니다.</p>,
  },
};
