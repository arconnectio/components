import styled from "styled-components";

export const ButtonV2 = styled.button.attrs<ButtonV2Props>((props) => ({
  children: props.children
}))<ButtonV2Props>`
  display: flex;
  color: ${(props) => 
    props.theme.displayTheme === "light" && props.secondary 
    ? "#7866D3" : "#FFFFFF"};
  background-color: ${(props) =>
    props.theme.displayTheme === "light" 
    ? (props.secondary ? "transparent" : "#7866D3")
    : (props.secondary ? "#333333" : "#8E7BEA")};
  border: ${(props) => 
    props.theme.displayTheme === "light"
    ? (props.secondary ? "1.5px solid #7866D3" : "none")
    : (props.secondary ? "1.5px solid #8E7BEA" : "none")};
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 24px;
  width: ${(props) => (props.fullWidth ? "100%" : "250px")};
  min-width: 100px;
  height: 42px;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.icon ? "5px" : "0")};
  transition: all 0.23s ease-in-out;
  
  box-shadow: 0 0 0 0
    rgba(
      ${(props) =>
        props.theme.theme},
      ${(props) => (props.secondary ? ".2" : 1)}
    );

  background-color: ${(props) =>
    props.theme.displayTheme === "light" 
    ? (props.secondary ? "transparent" : "#7866D3")
    : (props.secondary ? "transparent" : "#8E7BEA")};

  &:hover {
    background-color: ${(props) =>
      props.theme.displayTheme === "light"
      ? (props.secondary ? "#DDD9F4" : "#5647A0")
      : (props.secondary ? "#36324D" : "#6751D0")};
  };

  &:disabled {
    opacity: 0.87;
    cursor: not-allowed;
  }
`;

export interface ButtonV2Props {
  secondary?: boolean;
  fullWidth?: boolean;
  icon?: boolean;
  disabled?: boolean;
}
