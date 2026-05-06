import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "@storybook/test";
import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from "./index";
import "./accordion.css";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "line"],
      description: "아코디언 스타일",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="1">
        <AccordionTrigger>서비스 이용 안내</AccordionTrigger>
        <AccordionPanel>
          디지털 정부서비스를 이용하시려면 본인 인증이 필요합니다. 공동인증서, 간편인증 등을
          이용하여 본인 확인 후 서비스를 이용하실 수 있습니다.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionTrigger>개인정보 처리방침</AccordionTrigger>
        <AccordionPanel>
          수집된 개인정보는 서비스 제공 목적으로만 사용되며, 관련 법령에 따라 안전하게
          관리됩니다.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="3">
        <AccordionTrigger>자주 묻는 질문</AccordionTrigger>
        <AccordionPanel>
          서비스 이용 중 문제가 발생하면 고객센터(1588-0000)로 문의해 주세요.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

export const LineVariant: Story = {
  render: () => (
    <Accordion variant="line">
      <AccordionItem value="1">
        <AccordionTrigger>신청 방법</AccordionTrigger>
        <AccordionPanel>온라인 또는 방문 신청이 가능합니다.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionTrigger>처리 기간</AccordionTrigger>
        <AccordionPanel>접수일로부터 7일 이내 처리됩니다.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

export const ExpandInteraction: Story = {
  render: () => (
    <Accordion>
      <AccordionItem value="test">
        <AccordionTrigger>클릭하여 열기</AccordionTrigger>
        <AccordionPanel>패널 내용이 표시됩니다.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText("클릭하여 열기");

    await userEvent.click(trigger);
    await expect(canvas.getByText("패널 내용이 표시됩니다.")).toBeVisible();
  },
};
