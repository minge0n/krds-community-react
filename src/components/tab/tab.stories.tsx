import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tab, TabList, TabPanel, Tabs } from "./index";
import "./tab.css";

/**
 * ## 탭 (Tab)
 *
 * 버튼을 눌러 상호배타적인 여러 개의 콘텐츠 섹션을 전환할 수 있는 컴포넌트입니다.
 *
 * ### 사용 규칙
 * - 동일한 맥락의 콘텐츠를 분류할 때 사용
 * - 탭 개수는 2~6개 권장
 * - `fullWidth`로 균등 분배 가능
 *
 * ### 접근성
 * - Base UI Tabs 기반
 * - role="tablist", role="tab", role="tabpanel" 자동
 * - aria-selected 자동 관리
 * - 키보드: Arrow로 탭 이동, Enter/Space로 선택
 */
const meta: Meta<typeof Tabs> = {
  title: "Components/Tab",
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

/** 기본 */
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">개인정보</Tab>
        <Tab value="tab2">신청내역</Tab>
        <Tab value="tab3">알림설정</Tab>
      </TabList>
      <TabPanel value="tab1">개인정보 관리 화면입니다. 이름, 연락처, 주소 등을 수정할 수 있습니다.</TabPanel>
      <TabPanel value="tab2">신청내역 목록이 표시됩니다. 최근 신청 건을 확인하고 상태를 조회할 수 있습니다.</TabPanel>
      <TabPanel value="tab3">알림 설정을 변경할 수 있습니다. 푸시, 이메일, SMS 알림을 관리합니다.</TabPanel>
    </Tabs>
  ),
};

/** 전체 너비 (균등 분배) */
export const FullWidth: Story = {
  render: () => (
    <Tabs defaultValue="login">
      <TabList fullWidth>
        <Tab value="login">로그인</Tab>
        <Tab value="signup">회원가입</Tab>
      </TabList>
      <TabPanel value="login">
        <p style={{ padding: "16px 0" }}>아이디와 비밀번호를 입력하여 로그인합니다.</p>
      </TabPanel>
      <TabPanel value="signup">
        <p style={{ padding: "16px 0" }}>회원가입 양식을 작성합니다.</p>
      </TabPanel>
    </Tabs>
  ),
};

/** 여러 탭 */
export const ManyTabs: Story = {
  render: () => (
    <Tabs defaultValue="all">
      <TabList>
        <Tab value="all">전체</Tab>
        <Tab value="progress">처리중</Tab>
        <Tab value="complete">완료</Tab>
        <Tab value="reject">반려</Tab>
        <Tab value="cancel">취소</Tab>
      </TabList>
      <TabPanel value="all">전체 목록</TabPanel>
      <TabPanel value="progress">처리중인 건</TabPanel>
      <TabPanel value="complete">완료된 건</TabPanel>
      <TabPanel value="reject">반려된 건</TabPanel>
      <TabPanel value="cancel">취소된 건</TabPanel>
    </Tabs>
  ),
};
