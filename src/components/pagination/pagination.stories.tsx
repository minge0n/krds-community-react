import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination, PaginationItem, PaginationNav } from "./index";
import "./pagination.css";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

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
