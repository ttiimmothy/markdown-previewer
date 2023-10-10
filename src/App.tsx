import styled from "styled-components";
import { Header } from "./components/Header";
import { MarkdownInput } from "./components/MarkdownInput";
import { MarkdownOutput } from "./components/MarkdownOutput";
import { useState } from "react";
import { MarkdownGuide } from "./components/MarkdownGuide";

const Container = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    display: block;
  }
`;

function App() {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);

  const handleChange = (value: string) => {
    setMarkdown(value);
  };

  const onToggleGuide = () => {
    setShowGuide(!showGuide);
  };

  return (
    <>
      <Header onToggleGuide={onToggleGuide}></Header>
      {showGuide && <MarkdownGuide />}
      <Container>
        <MarkdownInput
          value={markdown}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
        <MarkdownOutput markdown={markdown} />
      </Container>
    </>
  );
}

export default App;
