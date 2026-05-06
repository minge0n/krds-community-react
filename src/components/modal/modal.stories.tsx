import type { Meta, StoryObj } from "@storybook/react-vite";
import { Modal, ModalBody, ModalClose, ModalContent, ModalFooter, ModalHeader, ModalTrigger } from "./index";
import { Button } from "../button/index";
import "./modal.css";
import "../button/button.css";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => (
    <Modal>
      <ModalTrigger render={<Button variant="primary">모달 열기</Button>} />
      <ModalContent>
        <ModalHeader>서비스 신청 확인</ModalHeader>
        <ModalBody>
          신청하신 서비스가 정상적으로 접수되었습니다. 처리 결과는 등록하신 연락처로
          안내드리겠습니다.
        </ModalBody>
        <ModalFooter>
          <ModalClose className="krds-btn medium tertiary">닫기</ModalClose>
          <Button variant="primary" size="medium">확인</Button>
        </ModalFooter>
        <ModalClose />
      </ModalContent>
    </Modal>
  ),
};

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

export const OpenInteraction: Story = {
  render: () => (
    <Modal>
      <ModalTrigger render={<Button>인터랙션 테스트</Button>} />
      <ModalContent>
        <ModalHeader>테스트 모달</ModalHeader>
        <ModalBody>모달이 열렸습니다.</ModalBody>
        <ModalFooter>
          <ModalClose className="krds-btn medium primary">확인</ModalClose>
        </ModalFooter>
        <ModalClose />
      </ModalContent>
    </Modal>
  ),
};
