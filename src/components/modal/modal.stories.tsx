import type { Meta, StoryObj } from "@storybook/react-vite";
import { Modal, ModalBody, ModalClose, ModalContent, ModalFooter, ModalHeader, ModalTrigger } from "./index";
import { Button } from "../button/index";
import "./modal.css";
import "../button/button.css";

/**
 * ## 모달 (Modal)
 *
 * 기본 창에 종속된 대화창으로, 사용자는 모달에서의 단일한 과업 또는 메시지에 집중할 수 있습니다.
 *
 * ### 사용 규칙
 * - 사용자의 즉각적 주의가 필요할 때만 사용
 * - 단일 과업 또는 확인에만 사용
 * - 복잡한 폼은 모달이 아닌 별도 페이지로
 * - 닫기 버튼(X) 항상 제공
 *
 * ### 접근성
 * - Base UI Dialog 기반
 * - Focus trap 자동 (모달 내에서만 탭 이동)
 * - Escape 키로 닫기
 * - aria-modal, aria-labelledby 자동
 * - 열릴 때 배경 스크롤 잠금
 */
const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

/** 기본 모달 */
export const Default: Story = {
  render: () => (
    <Modal>
      <ModalTrigger render={<Button variant="primary">모달 열기</Button>} />
      <ModalContent>
        <ModalHeader>알림</ModalHeader>
        <ModalBody>
          신청하신 서비스가 정상적으로 접수되었습니다.
          처리 결과는 등록하신 연락처로 안내드리겠습니다.
        </ModalBody>
        <ModalFooter>
          <ModalClose className="krds-btn medium primary">확인</ModalClose>
        </ModalFooter>
        <ModalClose />
      </ModalContent>
    </Modal>
  ),
};

/** 확인 대화상자 */
export const Confirmation: Story = {
  render: () => (
    <Modal>
      <ModalTrigger render={<Button variant="tertiary">삭제</Button>} />
      <ModalContent>
        <ModalHeader>삭제 확인</ModalHeader>
        <ModalBody>
          선택한 항목을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
        </ModalBody>
        <ModalFooter>
          <ModalClose className="krds-btn medium tertiary">취소</ModalClose>
          <Button variant="primary" size="medium">삭제</Button>
        </ModalFooter>
        <ModalClose />
      </ModalContent>
    </Modal>
  ),
};

/** 긴 콘텐츠 (스크롤) */
export const LongContent: Story = {
  render: () => (
    <Modal>
      <ModalTrigger render={<Button>약관 보기</Button>} />
      <ModalContent>
        <ModalHeader>이용약관</ModalHeader>
        <ModalBody>
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i} style={{ marginBottom: "12px" }}>
              제{i + 1}조 (목적) 이 약관은 디지털 정부서비스의 이용에 관한 기본적인 사항을
              규정함을 목적으로 합니다. 사용자는 본 약관에 동의함으로써 서비스를 이용할 수
              있습니다.
            </p>
          ))}
        </ModalBody>
        <ModalFooter>
          <ModalClose className="krds-btn medium tertiary">닫기</ModalClose>
          <Button variant="primary" size="medium">동의</Button>
        </ModalFooter>
        <ModalClose />
      </ModalContent>
    </Modal>
  ),
};
