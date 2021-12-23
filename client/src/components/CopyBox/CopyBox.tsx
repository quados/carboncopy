import { Button } from "components/Button"
import React, { FunctionComponent } from "react"
import {
  BottomBorderContainer,
  HalfVerticalLine,
  HorizontalLine,
  LinkContainer
} from "./styles"

interface Props {
  textToCopy: string
}
export const CopyBox: FunctionComponent<Props> = ({ textToCopy, children }) => {
  return (
    <>
      <LinkContainer>{children}</LinkContainer>
      <BottomBorderContainer>
        <HalfVerticalLine />
        <HorizontalLine width="90%" />
        <Button
          onClick={() => navigator.clipboard.writeText(textToCopy)}
          type="button"
          buttonStyle="outlined"
          width="100px"
          padding="4px 8px"
        >
          Copy!
        </Button>
        <HorizontalLine width="10%" />
        <HalfVerticalLine />
      </BottomBorderContainer>
    </>
  )
}
