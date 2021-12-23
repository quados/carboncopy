import styled from "styled-components"

export const CreateCarbonCopyContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.background};
`

export const CreateFormContainer = styled.div`
  width: 50%;
`

export const SubmittedContainer = styled.div`
  width: 65%;
  padding: 0 32px;
  & > *:nth-child(4) {
    margin: 16px 0;
  }
`

export const SubmitTitle = styled.div`
  color: ${({ theme }) => theme.color.textHigh};
  font-size: 1rem;
  user-select: none;
`

export const LinkStyle = styled.a`
  color: ${({ theme }) => theme.color.textHigh};
  width: 100%;
  word-wrap: break-word;
  text-align: center;
`

export const PassPhrase = styled.div`
  color: ${({ theme }) => theme.color.textHigh};
  font-size: 1.2rem;
`
