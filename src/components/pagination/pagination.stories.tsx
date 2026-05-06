import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination, PaginationItem, PaginationNav } from "./index";
import "./pagination.css";

/**
 * ## 페이지네이션 (Pagination)
 *
 * 여러 페이지로 나뉜 콘텐츠를 탐색할 수 있는 네비게이션 컴포넌트입니다.
 * 목록, 검색 결과, 게시판 등에서 사용합니다.
 *
 * ### 사용 규칙
 * - 한 페이지에 표시할 항목 수를 일정하게 유지합니다
 * - 현재 페이지를 시각적으로 강조합니다
 * - 이전/다음 버튼을 항상 제공합니다
 * - 첫 페이지/마지막 페이지에서는 해당 방향 버튼을 비활성화합니다
 *
 * ### 접근성
 * - `<nav>` 요소에 `aria-label="페이지 탐색"` 적용
 * - 현재 페이지에 `aria-current="page"` 적용
 * - 스크린리더용 "현재페이지" 텍스트가 숨겨진 형태로 제공됩니다
 * - 비활성화된 버튼에 `aria-disabled` 적용
 */
const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof Pagination>;

/** 기본 페이지네이션 */
export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationNav direction="prev" href="#" />
      <PaginationItem href="#">1</PaginationItem>
      <PaginationItem href="#" active>2</PaginationItem>
      <PaginationItem href="#">3</PaginationItem>
      <PaginationItem href="#">4</PaginationItem>
      <PaginationItem href="#">5</PaginationItem>
      <PaginationNav direction="next" href="#" />
    </Pagination>
  ),
};

/** 첫 페이지 (이전 비활성화) */
export const FirstPage: Story = {
  render: () => (
    <Pagination>
      <PaginationNav direction="prev" disabled />
      <PaginationItem href="#" active>1</PaginationItem>
      <PaginationItem href="#">2</PaginationItem>
      <PaginationItem href="#">3</PaginationItem>
      <PaginationItem href="#">4</PaginationItem>
      <PaginationItem href="#">5</PaginationItem>
      <PaginationNav direction="next" href="#" />
    </Pagination>
  ),
};

/** 마지막 페이지 (다음 비활성화) */
export const LastPage: Story = {
  render: () => (
    <Pagination>
      <PaginationNav direction="prev" href="#" />
      <PaginationItem href="#">6</PaginationItem>
      <PaginationItem href="#">7</PaginationItem>
      <PaginationItem href="#">8</PaginationItem>
      <PaginationItem href="#">9</PaginationItem>
      <PaginationItem href="#" active>10</PaginationItem>
      <PaginationNav direction="next" disabled />
    </Pagination>
  ),
};

/** 많은 페이지 */
export const ManyPages: Story = {
  render: () => (
    <Pagination>
      <PaginationNav direction="prev" href="#" />
      <PaginationItem href="#">1</PaginationItem>
      <PaginationItem href="#">2</PaginationItem>
      <PaginationItem href="#">3</PaginationItem>
      <PaginationItem href="#" active>4</PaginationItem>
      <PaginationItem href="#">5</PaginationItem>
      <PaginationItem href="#">6</PaginationItem>
      <PaginationItem href="#">7</PaginationItem>
      <PaginationItem href="#">8</PaginationItem>
      <PaginationItem href="#">9</PaginationItem>
      <PaginationItem href="#">10</PaginationItem>
      <PaginationNav direction="next" href="#" />
    </Pagination>
  ),
};
