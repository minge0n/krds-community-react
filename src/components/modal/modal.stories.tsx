import type { Meta, StoryObj } from "@storybook/react-vite";
import { Modal, ModalTrigger, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalClose } from "./index";
import "./modal.css";

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
      <ModalTrigger>모달 열기</ModalTrigger>
      <ModalContent>
        <ModalHeader>모달 제목</ModalHeader>
        <ModalBody>
          <p>모달 본문 내용입니다. 여기에 다양한 콘텐츠를 배치할 수 있습니다.</p>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="krds-btn primary medium">확인</button>
        </ModalFooter>
        <ModalClose />
      </ModalContent>
    </Modal>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Modal>
      <ModalTrigger>정보 입력</ModalTrigger>
      <ModalContent>
        <ModalHeader>개인정보 입력</ModalHeader>
        <ModalBody>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <label>
              이름
              <input type="text" placeholder="이름을 입력하세요" style={{ display: "block", width: "100%", marginTop: "4px" }} />
            </label>
            <label>
              이메일
              <input type="email" placeholder="이메일을 입력하세요" style={{ display: "block", width: "100%", marginTop: "4px" }} />
            </label>
          </div>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="krds-btn secondary medium">취소</button>
          <button type="button" className="krds-btn primary medium">저장</button>
        </ModalFooter>
        <ModalClose />
      </ModalContent>
    </Modal>
  ),
};

export const Confirmation: Story = {
  render: () => (
    <Modal>
      <ModalTrigger>삭제</ModalTrigger>
      <ModalContent>
        <ModalHeader>삭제 확인</ModalHeader>
        <ModalBody>
          <p>정말로 이 항목을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.</p>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="krds-btn secondary medium">취소</button>
          <button type="button" className="krds-btn primary medium">삭제</button>
        </ModalFooter>
        <ModalClose />
      </ModalContent>
    </Modal>
  ),
};
