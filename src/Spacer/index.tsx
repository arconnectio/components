import styled from "styled-components";

export const Spacer = styled.span<{ x?: number; y?: number }>`
  display: block;
  height: ${({ y }) => (y ? `${y}rem` : "0")};
  width: ${({ x }) => (x ? `${x}rem` : "0")};
`;
