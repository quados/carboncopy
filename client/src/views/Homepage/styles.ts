import styled from "styled-components"

export const HomepageContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const HomePageTitle = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.textHigh};
  margin: 0 0 32px 0;
`
