import React from "react"
import { screen } from "@testing-library/react"
import { render, testA11y } from "./test-utils"
import { App } from "./App"

test("renders learn react link", () => {
  render(<App />)
  const linkElement = screen.getByText(/learn chakra/i)
  expect(linkElement).toBeInTheDocument()
})

it("passes accessibility tests", async () => {
  render(<App />)
  const linkElement = screen.getByText(/learn chakra/i)
  await testA11y(linkElement)
})
