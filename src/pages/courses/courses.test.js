import { render, screen } from '@testing-library/react';
import Courses from './courses';
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from 'react-router-dom';

test("Aruba course name is rendered", () => {
  render(<Router><Courses/></Router>);
  const element = screen.getByText("Aruba");
  expect(element).toBeInTheDocument();
})

test("Borneo course name is rendered",() => {
  render(<Router><Courses/></Router>);
  const element = screen.getByText("Borneo");
  expect(element).toBeInTheDocument();
})

test("Corporate link is rendered", () => {
  render(<Router><Courses/></Router>);
  const linkElement = screen.getByText("Corporate");
  expect(linkElement).toBeInTheDocument();
})

test("All link is rendered", () => {
  render(<Router><Courses/></Router>);
  const linkElement = screen.getByText("All");
  expect(linkElement).toBeInTheDocument();
})

test("Full-time link is rendered", () => {
  render(<Router><Courses/></Router>);
  const linkElement = screen.getByText("Full-time");
  expect(linkElement).toBeInTheDocument();
})

test("Self-paced link is rendered", () => {
  render(<Router><Courses/></Router>);
  const linkElement = screen.getByText("Self-Paced");
  expect(linkElement).toBeInTheDocument();
})