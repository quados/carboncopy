import styled from "styled-components"

export const FormInputStyles = styled.input`
  width: 100%;
  height: 52px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.color.accentColor};
  border-radius: 4px;
  padding: 12px;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.color.textHigh};
  transition: 0.1s;
  &:hover,
  &:focus,
  &:active {
    border: 2px solid ${({ theme }) => theme.color.activeElement};
    color: ${({ theme }) => theme.color.textHigh};
  }
  ::placeholder {
    color: ${({ theme }) => theme.color.textLow};
    font-size: 0.875rem;
    font-weight: 500;
  }
`
