import { ChangeEventHandler } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 50%;
  height: calc(100vh - 58.5px);
  padding: 20px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    height: calc(50vh - 58.5px);
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
`;

type MarkdownInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
};

export function MarkdownInput({
  value,
  onChange,
}: MarkdownInputProps): JSX.Element {
  return (
    <InputContainer>
      <StyledTextArea value={value} onChange={onChange}></StyledTextArea>
    </InputContainer>
  );
}
