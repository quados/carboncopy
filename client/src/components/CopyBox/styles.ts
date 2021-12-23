import styled from "styled-components"

export const LinkContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.color.textMedium};
  border-bottom: none;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BottomBorderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 44px;
`
export const HalfVerticalLine = styled.div`
  height: 50%;
  width: 1px;
  background-color: ${({ theme }) => theme.color.textMedium};
  align-self: flex-start;
`

interface Props {
  width: string
}
export const HorizontalLine = styled.div<Props>`
  width: ${({ width }) => `calc(${width} - 50px)`};
  height: 1px;
  background-color: ${({ theme }) => theme.color.textMedium};
`
