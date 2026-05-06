import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from "./index";
import "./accordion.css";

/**
 * ## 아코디언 (Accordion)
 *
 * 한 페이지에서 관련 있는 여러 콘텐츠 섹션을 확인할 수 있도록 하는 컴포넌트입니다.
 * 헤더를 선택하여 하위 콘텐츠 섹션을 표시하거나 숨길 수 있습니다.
 *
 * ### Variant
 * - `default`: 구분선으로 분리
 * - `line`: 보더로 감싸는 카드형
 *
 * ### 접근성
 * - Base UI Accordion 기반
 * - `aria-expanded`, `aria-controls` 자동 관리
 * - 키보드: Enter/Space로 토글, Arrow로 이동
 */
const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "line"],
      description: "아코디언 스타일",
      table: { defaultValue: { summary: "default" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

/** 기본 */
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
          관리됩니다. 보유 기간 경과 후 즉시 파기합니다.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="3">
        <AccordionTrigger>자주 묻는 질문</AccordionTrigger>
        <AccordionPanel>
          서비스 이용 중 문제가 발생하면 고객센터(1588-0000)로 문의해 주세요.
          운영시간: 평일 09:00~18:00
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

/** Line 변형 (카드형) */
export const Line: Story = {
  render: () => (
    <Accordion variant="line">
      <AccordionItem value="1">
        <AccordionTrigger>신청 방법</AccordionTrigger>
        <AccordionPanel>
          온라인 또는 방문 신청이 가능합니다. 온라인 신청은 정부24에서 가능하며,
          방문 신청은 가까운 주민센터를 이용해 주세요.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionTrigger>처리 기간</AccordionTrigger>
        <AccordionPanel>접수일로부터 7일 이내 처리됩니다. 서류 보완이 필요한 경우 추가 기간이 소요될 수 있습니다.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="3">
        <AccordionTrigger>구비 서류</AccordionTrigger>
        <AccordionPanel>신분증, 신청서, 관련 증빙서류가 필요합니다. 자세한 내용은 안내 페이지를 참고해 주세요.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

/** FAQ 패턴 */
export const FAQ: Story = {
  render: () => (
    <div>
      <h3 style={{ marginBottom: "16px", fontSize: "19px", fontWeight: 700 }}>자주 묻는 질문</h3>
      <Accordion>
        <AccordionItem value="q1">
          <AccordionTrigger>비밀번호를 잊어버렸어요</AccordionTrigger>
          <AccordionPanel>
            로그인 화면에서 '비밀번호 찾기'를 클릭하시면 등록된 이메일 또는 휴대폰으로
            임시 비밀번호를 받으실 수 있습니다.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="q2">
          <AccordionTrigger>신청 취소는 어떻게 하나요?</AccordionTrigger>
          <AccordionPanel>
            마이페이지 &gt; 신청내역에서 '취소' 버튼을 클릭하시면 됩니다.
            단, 처리 중인 건은 취소가 불가능할 수 있습니다.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="q3">
          <AccordionTrigger>서류는 어디서 발급받나요?</AccordionTrigger>
          <AccordionPanel>
            정부24(www.gov.kr)에서 온라인 발급이 가능합니다.
            일부 서류는 주민센터 방문 발급만 가능합니다.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
