import React from "react"
import { render } from "@testing-library/react"
import {shallow} from "enzyme"

import App from "./App"

describe("<App />", () => {
  it("should render successfully", () => {
    shallow(<App />)
  })
})
