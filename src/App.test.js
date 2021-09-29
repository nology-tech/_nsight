import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

//Using render method -> tells us that we want to work with the functionality of that specific component.

test('Dashboard link text is rendered', () => {
  render(<App />);
  const linkElement = screen.getByText("Dashboard");
  expect(linkElement).toBeInTheDocument();
});

test('Courses link text is rendered', () => {
  render(<App />);
  const linkElement = screen.getByText("Courses");
  expect(linkElement).toBeInTheDocument();
});

test('Settings link text is rendered', () => {
  render(<App />);
  const linkElement = screen.getByText("Settings");
  expect(linkElement).toBeInTheDocument();
});

test('Students link text is rendered', () => {
  render(<App />);
  const linkElement = screen.getByText("Students");
  expect(linkElement).toBeInTheDocument();
});

test('Enrollment link text is rendered', () => {
  render(<App />);
  const linkElement = screen.getByText("Enrollment");
  expect(linkElement).toBeInTheDocument();
});

test('Dashboard has active class on page initial render', () => {
  render(<App />);
  const linkElement = screen.getByText("Dashboard");
  expect(linkElement).toHaveClass("active");
});

test('Courses has active class after Courses link clicked', () => {
  render(<App />);
  userEvent.click(screen.getByText('Courses'));
  expect(screen.getByText('Courses')).toHaveClass("active");
});

test('Students has active class after Students link clicked', () => {
  render(<App />);
  userEvent.click(screen.getByText('Students'));
  expect(screen.getByText('Students')).toHaveClass("active");
});

test('Settings has active class after Settings link clicked', () => {
  render(<App />);
  userEvent.click(screen.getByText('Settings'));
  expect(screen.getByText('Settings')).toHaveClass("active");
});

test('Dashboard has active class after Settings link and then Dashboard is clicked', () => {
  render(<App />);
  userEvent.click(screen.getByText('Settings'));
  userEvent.click(screen.getByText('Dashboard'));
  expect(screen.getByText('Dashboard')).toHaveClass("active");
});

test('Students on hover svg is rendered when Students link is clicked', () => {
  render(<App />);
  userEvent.click(screen.getByText('Students'));
  expect(screen.getByAltText('studentsonhover')).toBeInTheDocument();
});

