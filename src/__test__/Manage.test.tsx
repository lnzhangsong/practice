/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import Manage from "../pages/manage";

test("renders learn react link", () => {
  render(<Manage />);
  const linkElement = screen.getByText(/manage/i);
  expect(linkElement).toBeInTheDocument();
});
