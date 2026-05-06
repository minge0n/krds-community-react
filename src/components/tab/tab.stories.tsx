import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabList, Tab, TabPanel } from "./index";
import "./tab.css";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tab",
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">탭 1</Tab>
        <Tab value="tab2">탭 2</Tab>
        <Tab value="tab3">탭 3</Tab>
      </TabList>
      <TabPanel value="tab1">첫 번째 탭의 내용입니다.</TabPanel>
      <TabPanel value="tab2">두 번째 탭의 내용입니다.</TabPanel>
      <TabPanel value="tab3">세 번째 탭의 내용입니다.</TabPanel>
    </Tabs>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Tabs defaultValue="info">
      <TabList fullWidth>
        <Tab value="info">기본 정보</Tab>
        <Tab value="detail">상세 정보</Tab>
        <Tab value="history">이력</Tab>
      </TabList>
      <TabPanel value="info">기본 정보 내용입니다.</TabPanel>
      <TabPanel value="detail">상세 정보 내용입니다.</TabPanel>
      <TabPanel value="history">이력 내용입니다.</TabPanel>
    </Tabs>
  ),
};
