import axios from "axios"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { ViewsContainer } from "ViewsContainer"
import reportWebVitals from "./reportWebVitals"

axios.defaults.baseURL = "http://localhost:8000"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ViewsContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
