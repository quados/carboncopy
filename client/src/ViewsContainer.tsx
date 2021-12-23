import React, { FunctionComponent } from "react"
import { Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { darkModeTheme, GlobalStyle } from "styles"
import { CreateCarbonCopy } from "views/CreateCarbonCopy"
import { Homepage } from "views/Homepage"
import { OpenCarbonCopy } from "views/OpenCarbonCopy"

export const ViewsContainer: FunctionComponent = () => {
  return <AuthenticatedViewsContainer />
}

export const AuthenticatedViewsContainer: FunctionComponent = () => {
  return (
    <ThemeProvider theme={darkModeTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreateCarbonCopy />} />
        <Route path="/prediction/:hash" element={<OpenCarbonCopy />} />
        {/* === Login ===
            <PrivateRoute path="/">
              <Redirect to="/login" />
            </PrivateRoute> */}
      </Routes>
    </ThemeProvider>
  )
}
