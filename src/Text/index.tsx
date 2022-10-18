import { HTMLAttributes, useMemo } from "react"
import styled from "styled-components"

const sizes = {
  "h1": "2rem",
  "h2": "1.65rem",
  "h3": "1.45rem",
  "p": "1rem"
};

export function Text({ children, title, subtitle, heading, noMargin = false, ...props }: TextProps & Omit<HTMLAttributes<any>, keyof TextProps>) {
  const tag = useMemo(() => {
    if (title) return "h1";
    else if (subtitle) return "h2";
    else if (heading) return "h3";
    else return "p";
  }, [title, subtitle, heading]);

  return (
    <TextElement as={tag} size={tag} noMargin={noMargin} {...props}>
      {children}
    </TextElement>
  );
}

const TextElement = styled.p<{ size: "h1" | "h2" | "h3" | "p"; noMargin: boolean; }>`
  font-size: ${props => sizes[props.size]};
  color: rgb(${props => props.size === "p" ? props.theme.secondaryText : props.theme.primaryText});
  font-weight: ${props => props.size === "p" ? "500" : (props.size === "h1" ? "700" : "600")};
  margin-top: 0;
  margin-bottom: ${props => props.noMargin ? "0" : "1em"};
`;

export interface TextProps {
  title?: boolean;
  subtitle?: boolean;
  heading?: boolean;
  noMargin?: boolean;
}
