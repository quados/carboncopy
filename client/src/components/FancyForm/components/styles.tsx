import styled from "styled-components"

export const FormComponentContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
`

export const FormComponentTitle = styled.div`
  height: 20px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.color.textHigh};
`

export const FormError = styled.div`
  height: 20px;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.error};
  margin: 0 0 16px 0;
`

export const FormInfo = styled.div`
  color: ${({ theme }) => theme.color.textMedium};
`
