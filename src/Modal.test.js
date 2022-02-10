import Modal from "./components/Modal";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
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
