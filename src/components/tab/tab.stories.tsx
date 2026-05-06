import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tab, TabList, TabPanel, Tabs } from "./index";
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
        <Tab value="tab1">개인정보</Tab>
        <Tab value="tab2">신청내역</Tab>
        <Tab value="tab3">알림설정</Tab>
      </TabList>
      <TabPanel value="tab1">개인정보 관리 화면입니다.</TabPanel>
      <TabPanel value="tab2">신청내역 목록이 표시됩니다.</TabPanel>
      <TabPanel value="tab3">알림 설정을 변경할 수 있습니다.</TabPanel>
    </Tabs>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Tabs defaultValue="login">
      <TabList fullWidth>
        <Tab value="login">로그인</Tab>
        <Tab value="signup">회원가입</Tab>
      </TabList>
      <TabPanel value="login">로그인 폼 영역</TabPanel>
      <TabPanel value="signup">회원가입 폼 영역</TabPanel>
    </Tabs>
  ),
};

export const SwitchInteraction: Story = {
  render: () => (
    <Tabs defaultValue="first">
      <TabList>
        <Tab value="first">첫 번째</Tab>
        <Tab value="second">두 번째</Tab>
      </TabList>
      <TabPanel value="first">첫 번째 탭 내용</TabPanel>
      <TabPanel value="second">두 번째 탭 내용</TabPanel>
    </Tabs>
  ),
};
