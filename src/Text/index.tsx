import { HTMLAttributes, PropsWithChildren, useMemo } from "react"
import styled from "styled-components"

const sizes = {
  "h1": "2rem",
  "h2": "1.65rem",
  "h3": "1.45rem",
  "p": "1rem"
};

export function Text({ children, title, subtitle, heading, ...props }: TextProps & Omit<HTMLAttributes<any>, keyof TextProps>) {
  const tag = useMemo(() => {
    if (title) return "h1";
    else if (subtitle) return "h2";
    else if (heading) return "h3";
    else return "p";
  }, [title, subtitle, heading]);

  const TextElement = useMemo(() => styled[tag]`
    font-size: ${sizes[tag]};
    color: rgb(${props => tag === "p" ? props.theme.secondaryText : props.theme.primaryText});
    font-weight: ${tag === "p" ? "500" : "700"};
    margin-top: 0;
  `, [tag]);

  return (
    <TextElement {...props}>
      {children}
    </TextElement>
  );
}

export interface TextProps {
  title?: boolean;
  subtitle?: boolean;
  heading?: boolean;
}
