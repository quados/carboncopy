import styled from "styled-components"

interface Props {
  buttonStyle: "solid" | "outlined"
  width: string
  padding: string
}
export const ButtonContainer = styled.button<Props>`
  background-color: ${({ theme, buttonStyle }) =>
    buttonStyle === "solid" ? theme.color.accentColor : "transparent"};
  color: #fefefe;
  font-weight: 600;
  font-size: 1.2rem;
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  border: ${({ theme, buttonStyle }) =>
    buttonStyle === "outlined" && `2px solid ${theme.color.accentColor}`};
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme, buttonStyle }) =>
      buttonStyle === "solid" ? theme.color.activeElement : "transparent"};
    border: ${({ theme, buttonStyle }) =>
      buttonStyle === "outlined" && `2px solid ${theme.color.activeElement}`};
    transition: 0.1s;
  }
  user-select: none;
`
