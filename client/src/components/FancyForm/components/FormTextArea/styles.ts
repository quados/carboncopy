import styled from "styled-components"
import { fancyScrollbar } from "styles"

export const FormTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`

export const FormTextAreaStyle = styled.textarea`
  min-height: 50px;
  height: 250px;
  display: flex;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.color.accentColor};
  background-color: transparent;
  border-radius: 5px;
  padding: 10px;
  resize: none;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.textMedium};
  transition: 0.1s;
  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.color.textHigh};
    border-color: ${({ theme }) => theme.color.activeElement};
  }
  ${fancyScrollbar}
`

export const FormTextAreaCount = styled.div`
  position: absolute;
  bottom: 28px;
  right: 12px;
  color: ${({ theme }) => theme.color.textLow};
  font-size: 0.75rem;
  font-weight: 500;
`
