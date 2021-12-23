import { Button } from "components/Button"
import React, { FunctionComponent } from "react"
import { useNavigate } from "react-router-dom"
import { HomepageContainer, HomePageTitle } from "./styles"

interface Props {}

export const Homepage: FunctionComponent<Props> = () => {
  const navigate = useNavigate()
  return (
    <HomepageContainer>
      <HomePageTitle>Welcome to CarbonCopy.IO!</HomePageTitle>
      <Button
        onClick={() => {
          navigate(`/create`)
        }}
        type="button"
        width=""
      >
        Create a Carbon Copy!
      </Button>
    </HomepageContainer>
  )
}
