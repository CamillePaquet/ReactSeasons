import NextSeason from "./components/NextSeason";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe(NextSeason.name, () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 1, 10));
  });
  it("renders a title `Hiver`", () => {
    render(<NextSeason today={new Date()}></NextSeason>);
    expect(screen.getByText("Printemps")).toBeInTheDocument();
  });
  it("renders a paragraphe text `92 jours`", () => {
    render(<NextSeason today={new Date()}></NextSeason>);
    expect(screen.getByText("92 jours")).toBeInTheDocument();
  });
  it("renders a paragraphe text `dans 38 jours`", () => {
    render(<NextSeason today={new Date()}></NextSeason>);
    expect(screen.getByText("dans 38 jours")).toBeInTheDocument();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
});

describe(NextSeason.name, () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 6, 10));
  });
  it("renders a title `Hiver`", () => {
    render(<NextSeason today={new Date()}></NextSeason>);
    expect(screen.getByText("Automne")).toBeInTheDocument();
  });
  it("renders a paragraphe text `88 jours`", () => {
    render(<NextSeason today={new Date()}></NextSeason>);
    expect(screen.getByText("88 jours")).toBeInTheDocument();
  });
  it("renders a paragraphe text `dans 75 jours`", () => {
    render(<NextSeason today={new Date()}></NextSeason>);
    expect(screen.getByText("dans 75 jours")).toBeInTheDocument();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
});
