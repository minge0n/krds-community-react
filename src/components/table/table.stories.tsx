import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table } from "./index";
import "./table.css";

/**
 * ## 테이블 (Table)
 *
 * 데이터를 행과 열로 구조화하여 표시하는 테이블 컴포넌트입니다.
 * 비교, 정렬, 검색이 필요한 데이터 표시에 사용합니다.
 *
 * ### 사용 규칙
 * - 2개 이상의 열과 행이 있는 데이터에 사용합니다
 * - 열 헤더(`<th>`)를 반드시 제공합니다
 * - 반응형 처리를 위해 가로 스크롤을 지원합니다
 * - 데이터가 많은 경우 페이지네이션과 함께 사용합니다
 *
 * ### 접근성
 * - `<table>` 시맨틱 요소를 사용합니다
 * - `<thead>`, `<tbody>`로 구조를 구분합니다
 * - `<th scope="col">`로 열 헤더를 명시합니다
 * - 복잡한 테이블은 `<caption>`으로 설명을 제공합니다
 */
const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "600px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof Table>;

/** 기본 테이블 */
export const Default: Story = {
  render: () => (
    <Table>
      <caption className="sr-only">민원 처리 현황</caption>
      <thead>
        <tr>
          <th scope="col">번호</th>
          <th scope="col">민원명</th>
          <th scope="col">신청일</th>
          <th scope="col">상태</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>3</td>
          <td>주민등록등본 발급</td>
          <td>2025.01.15</td>
          <td>완료</td>
        </tr>
        <tr>
          <td>2</td>
          <td>운전면허증 갱신</td>
          <td>2025.01.14</td>
          <td>처리 중</td>
        </tr>
        <tr>
          <td>1</td>
          <td>여권 재발급</td>
          <td>2025.01.10</td>
          <td>접수</td>
        </tr>
      </tbody>
    </Table>
  ),
};

/** 많은 열 */
export const ManyColumns: Story = {
  render: () => (
    <Table>
      <caption className="sr-only">공무원 채용 공고</caption>
      <thead>
        <tr>
          <th scope="col">공고번호</th>
          <th scope="col">기관명</th>
          <th scope="col">직렬</th>
          <th scope="col">채용인원</th>
          <th scope="col">접수기간</th>
          <th scope="col">시험일</th>
          <th scope="col">상태</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2025-001</td>
          <td>행정안전부</td>
          <td>행정직</td>
          <td>5명</td>
          <td>01.15~01.30</td>
          <td>03.15</td>
          <td>접수 중</td>
        </tr>
        <tr>
          <td>2025-002</td>
          <td>과학기술정보통신부</td>
          <td>전산직</td>
          <td>3명</td>
          <td>01.20~02.05</td>
          <td>03.22</td>
          <td>접수 예정</td>
        </tr>
      </tbody>
    </Table>
  ),
};

/** 숫자 데이터 */
export const NumericData: Story = {
  render: () => (
    <Table>
      <caption className="sr-only">월별 민원 처리 통계</caption>
      <thead>
        <tr>
          <th scope="col">월</th>
          <th scope="col">접수</th>
          <th scope="col">처리 완료</th>
          <th scope="col">처리율</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1월</td>
          <td style={{ textAlign: "right" }}>1,234</td>
          <td style={{ textAlign: "right" }}>1,180</td>
          <td style={{ textAlign: "right" }}>95.6%</td>
        </tr>
        <tr>
          <td>2월</td>
          <td style={{ textAlign: "right" }}>1,456</td>
          <td style={{ textAlign: "right" }}>1,398</td>
          <td style={{ textAlign: "right" }}>96.0%</td>
        </tr>
        <tr>
          <td>3월</td>
          <td style={{ textAlign: "right" }}>1,678</td>
          <td style={{ textAlign: "right" }}>1,620</td>
          <td style={{ textAlign: "right" }}>96.5%</td>
        </tr>
      </tbody>
    </Table>
  ),
};

/** 빈 테이블 */
export const Empty: Story = {
  render: () => (
    <Table>
      <caption className="sr-only">검색 결과</caption>
      <thead>
        <tr>
          <th scope="col">번호</th>
          <th scope="col">제목</th>
          <th scope="col">작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={3} style={{ textAlign: "center", padding: "40px", color: "#999" }}>
            검색 결과가 없습니다.
          </td>
        </tr>
      </tbody>
    </Table>
  ),
};
