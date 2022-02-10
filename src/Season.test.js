import Season from "./components/Season";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe(Season.name, () => {
  it("renders a title Winter", () => {
    render(<Season today={new Date(2022, 1, 10)} showModal={null}></Season>);
    expect(screen.getByText("Hiver")).toBeInTheDocument();
  });
  it.skip("renders a title `Winter`", () => {});
  it.skip("renders a text `99 days`", () => {});
});
