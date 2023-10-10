import styled from "styled-components";
import Markdown from "react-markdown";

const OutputContainer = styled.div`
  width: 50%;
  height: calc(100vh - 58.5px);
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
  border-left: 1px solid rgb(221, 221, 221);
  background-color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    width: 100%;
    height: calc(50vh - 58.5px);
  }
`;

type MarkdownOutputProps = {
  markdown: string;
};

export function MarkdownOutput({ markdown }: MarkdownOutputProps) {
  return (
    <OutputContainer>
      <Markdown>{markdown}</Markdown>
    </OutputContainer>
  );
}
