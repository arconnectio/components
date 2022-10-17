import { HTMLProps, useEffect, useState, useRef, MutableRefObject } from "react";
import { FileIcon } from "@iconicicons/react";
import { mergeRefs } from "react-merge-refs";
import { Button } from "../Button";
import { Card } from "../Card";
import { Text } from "../Text";
import styled from "styled-components";

export function FileInput({ children, accept, multiple, ref, ...props }: Omit<HTMLProps<HTMLDivElement>, "ref"> & FileInputProps) {
  // file input ref
  const fileInput = useRef<HTMLInputElement>();

  // grab file names
  const [fileNames, setFileNames] = useState<string[]>([]);

  useEffect(() => {
    if (!fileInput.current) return;

    const listener = () => {
      const files = fileInput?.current?.files;

      if (!files || files.length === 0) {
        return setFileNames([]);
      }

      // map file names
      setFileNames(Array.from(files).map((file) => file.name));
    }

    fileInput.current.addEventListener("change", listener);

    return () => fileInput.current?.removeEventListener("change", listener);
  }, [fileInput.current]);

  return (
    <Wrapper {...props as any}>
      <Text noMargin>
        {(fileNames.length === 0 && children) || fileNames.join(", ")}
      </Text>
      <SelectFileButton onClick={() => fileInput?.current?.click()}>
        <FileIcon />
      </SelectFileButton>
      <HiddenInput
        accept={accept}
        multiple={multiple}
        // @ts-expect-error
        ref={ref ? mergeRefs([fileInput, ref]) : fileInput}
      />
    </Wrapper>
  );
}

const Wrapper = styled(Card).attrs({
  smallPadding: true
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

const HiddenInput = styled.input.attrs({
  type: "file"
})`
  position: absolute;
  z-index: 10;
  border: none;
  outline: none;
  background-color: transparent;
  opacity: 0;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const SelectFileButton = styled(Button).attrs({
  secondary: true
})`
  z-index: 20;
  padding: .9rem;
  border-radius: 20px;
`;

interface FileInputProps {
  accept?: string;
  multiple?: boolean;
  ref?: MutableRefObject<HTMLInputElement | undefined>;
}
