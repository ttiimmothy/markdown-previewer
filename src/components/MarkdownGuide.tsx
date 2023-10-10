import { styled } from "styled-components";

const GuideContainer = styled.div`
  background-color: rgb(249, 249, 249);
  padding: 20px;
  margin: 10px;
  border: 1px solid rgb(221, 221, 221);
`;

const syntax = [
  "# H1",
  "## H2",
  "### H3",
  "**bold**",
  "*italic*",
  "[Link](http://a.com)",
  "![Image](http://url/a.png)",
  "`inline code`",
  "```block code```",
  "- list item",
];

export function MarkdownGuide() {
  return (
    <GuideContainer>
      <h2>Markdown Cheat Sheet</h2>
      <ul>
        {syntax.map((string, index) => (
          <li key={index}>
            <code>{string}</code>
          </li>
        ))}
      </ul>
    </GuideContainer>
  );
}
