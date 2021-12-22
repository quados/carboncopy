import React, { FunctionComponent } from "react"
import { ButtonContainer } from "./styles"

interface Props {
  onClick: () => void
}

export const Button: FunctionComponent<Props> = ({ onClick, children }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
}
