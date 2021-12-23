import styled from "styled-components"

export const OpenCarbonCopyContainer = styled.div`
  background: ${({ theme }) => theme.color.background};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const OpenFormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`
export const DecryptedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`
export const DecryptedContent = styled.div`
  color: ${({ theme }) => theme.color.textHigh};
  height: 250px;
  display: flex;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.color.accentColor};
  border-radius: 5px;
  padding: 10px;
  font-size: 0.875rem;
  font-weight: 500;
`
