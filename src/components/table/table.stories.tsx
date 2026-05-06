import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table } from "./index";
import "./table.css";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
      <thead>
        <tr>
          <th scope="col">번호</th>
          <th scope="col">제목</th>
          <th scope="col">작성자</th>
          <th scope="col">등록일</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>3</td>
          <td>시스템 점검 안내</td>
          <td>관리자</td>
          <td>2025.05.06</td>
        </tr>
        <tr>
          <td>2</td>
          <td>서비스 이용 안내</td>
          <td>관리자</td>
          <td>2025.05.05</td>
        </tr>
        <tr>
          <td>1</td>
          <td>개인정보처리방침 변경</td>
          <td>관리자</td>
          <td>2025.05.01</td>
        </tr>
      </tbody>
    </Table>
  ),
};

export const WithCaption: Story = {
  render: () => (
    <Table>
      <caption>2025년 상반기 민원 처리 현황</caption>
      <thead>
        <tr>
          <th scope="col">월</th>
          <th scope="col">접수</th>
          <th scope="col">처리완료</th>
          <th scope="col">처리율</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1월</td>
          <td>1,234</td>
          <td>1,200</td>
          <td>97.2%</td>
        </tr>
        <tr>
          <td>2월</td>
          <td>1,456</td>
          <td>1,430</td>
          <td>98.2%</td>
        </tr>
        <tr>
          <td>3월</td>
          <td>1,678</td>
          <td>1,650</td>
          <td>98.3%</td>
        </tr>
      </tbody>
    </Table>
  ),
};
