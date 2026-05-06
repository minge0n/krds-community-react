import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomSheet, BottomSheetTrigger } from "./index";
import "./bottom-sheet.css";

const meta: Meta<typeof BottomSheet> = {
  title: "Components/BottomSheet",
  component: BottomSheet,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  render: () => (
    <BottomSheet title="바텀시트 제목" open={true} onOpenChange={() => {}}>
      <p>바텀시트 내용입니다. 여기에 다양한 콘텐츠를 배치할 수 있습니다.</p>
    </BottomSheet>
  ),
};

export const WithTrigger: Story = {
  render: () => (
    <>
      <BottomSheetTrigger>바텀시트 열기</BottomSheetTrigger>
      <BottomSheet title="옵션 선택" onOpenChange={() => {}}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ padding: "12px 0", borderBottom: "1px solid #eee" }}>옵션 1</li>
          <li style={{ padding: "12px 0", borderBottom: "1px solid #eee" }}>옵션 2</li>
          <li style={{ padding: "12px 0" }}>옵션 3</li>
        </ul>
      </BottomSheet>
    </>
  ),
};
