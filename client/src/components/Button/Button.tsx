import React, { FunctionComponent } from "react"
import { ButtonContainer } from "./styles"

interface Props {
  onClick: () => void
  type: "button" | "submit" | "reset" | undefined
  buttonStyle?: "solid" | "outlined"
  width?: string
  padding?: string
}

export const Button: FunctionComponent<Props> = ({
  onClick,
  type,
  buttonStyle = "solid",
  width = "225px",
  padding = "8px 16px",
  children
}) => {
  return (
    <ButtonContainer
      onClick={onClick}
      type={type}
      buttonStyle={buttonStyle}
      width={width}
      padding={padding}
    >
      {children}
    </ButtonContainer>
  )
}
