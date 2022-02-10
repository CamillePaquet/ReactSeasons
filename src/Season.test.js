import Season from "./components/Season";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe(Season.name, () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 1, 10));
  });
  it("renders a title `Winter`", () => {
    render(<Season today={new Date()}></Season>);
    expect(screen.getByText("Hiver")).toBeInTheDocument();
  });
  it("renders a paragraphe text `Depuis 51 jours`", () => {
    render(<Season today={new Date()}></Season>);
    expect(screen.getByText("Depuis 51 jours")).toBeInTheDocument();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
});
