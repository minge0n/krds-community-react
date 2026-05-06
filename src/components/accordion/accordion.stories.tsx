import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from "./index";
import "./accordion.css";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>아코디언 항목 1</AccordionTrigger>
        <AccordionPanel>아코디언 항목 1의 내용입니다.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>아코디언 항목 2</AccordionTrigger>
        <AccordionPanel>아코디언 항목 2의 내용입니다.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>아코디언 항목 3</AccordionTrigger>
        <AccordionPanel>아코디언 항목 3의 내용입니다.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

export const LineVariant: Story = {
  render: () => (
    <Accordion variant="line">
      <AccordionItem value="item-1">
        <AccordionTrigger>서비스 이용 안내</AccordionTrigger>
        <AccordionPanel>서비스 이용에 대한 상세 안내 내용입니다.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>자주 묻는 질문</AccordionTrigger>
        <AccordionPanel>자주 묻는 질문에 대한 답변입니다.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

export const DefaultExpanded: Story = {
  render: () => (
    <Accordion defaultValue={["item-1"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>기본 열림 항목</AccordionTrigger>
        <AccordionPanel>이 항목은 기본으로 열려 있습니다.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>닫힌 항목</AccordionTrigger>
        <AccordionPanel>이 항목은 닫혀 있습니다.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};
