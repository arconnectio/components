import styled from "styled-components";

const sizes = {
  popup: {
    normal: "34px",
    slim: "20px"
  },
  page: {
    normal: "12vw",
    slim: "24px"
  }
};

export const Section = styled.div<SectionProps>`
  position: relative;
  padding: 1rem ${props => sizes[props.type || "popup"][props.size || "normal"]};
`;

export interface SectionProps {
  type?: "popup" | "page";
  size?: "normal" | "slim";
}
