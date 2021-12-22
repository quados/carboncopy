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
          console.log("ho")
          navigate(`/create`)
        }}>
        Create a Carbon Copy!
      </Button>
    </HomepageContainer>
  )
}
