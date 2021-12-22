import React, { FunctionComponent } from "react"
import { Route, Routes } from "react-router-dom"
import { CreateCarbonCopy } from "views/CreateCarbonCopy"
import { Homepage } from "views/Homepage"

export const ViewsContainer: FunctionComponent = () => {
  return <AuthenticatedViewsContainer />
}

export const AuthenticatedViewsContainer: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/create" element={<CreateCarbonCopy />} />

      {/* === Login ===
            <PrivateRoute path="/">
              <Redirect to="/login" />
            </PrivateRoute> */}
    </Routes>
  )
}
