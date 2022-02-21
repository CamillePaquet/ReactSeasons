import Modal from "./components/Modal";
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

describe(Modal.name, () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 1, 10));
  });
  it("renders a button with text `Et après ?`", () => {
    render(<Modal today={new Date()}></Modal>);
    expect(
      screen.getByRole("button", { name: "Et après ?" })
    ).toBeInTheDocument();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
});

describe("on buttons click", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 1, 10));
  });
  beforeEach(() => {
    render(<Modal today={new Date()}></Modal>);
    fireEvent.click(screen.getByRole("button", { name: "Et après ?" }));
  });

  it("does not render a button with `Et après ?` label", () => {
    expect(
      screen.queryByRole("button", { name: "Et après ?" })
    ).not.toBeInTheDocument();
  });

  it("renders a button with `NextSeason` label", () => {
    waitFor(
      () =>
        expect(screen.queryByRole("div", { class: "containerNextSeason" }))
          .toBeInTheDocument
    );
  });

  it("renders a button with `Ok, je vais être patient...` label", () => {
    expect(
      screen.getByRole("button", {
        name: "Ok, je vais être patient !",
        hidden: true,
      })
    ).toBeInTheDocument();
  });

  it("renders a button with `Ok, je vais être patient...` label", () => {
    fireEvent.click(
      screen.getByRole("button", {
        name: "Ok, je vais être patient !",
        hidden: true,
      })
    );
    expect(
      screen.getByRole("button", {
        name: "Et après ?",
        hidden: true,
      })
    ).toBeInTheDocument();
  });
});
