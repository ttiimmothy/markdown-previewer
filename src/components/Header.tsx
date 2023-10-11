import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #282c34;
  color: white;
`;

const Title = styled.h1`
  margin: 0;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #61dafb;
  color: #282c34;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease 0s;
  &:hover {
    background-color: rgb(53, 168, 212);
  }
`;

type HeaderProps = {
  onToggleGuide: () => void;
};
export function Header({ onToggleGuide }: HeaderProps): JSX.Element {
  return (
    <HeaderContainer>
      <Title>Markdown Previewer</Title>
      <Button onClick={onToggleGuide}>Markdown Cheat Sheet</Button>
    </HeaderContainer>
  );
}
