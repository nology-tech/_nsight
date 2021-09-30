import { render, screen } from '@testing-library/react';
import Navbar from './navbar.jsx';
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from 'react-router-dom';


beforeEach(() => {
  window.location.replace("http://localhost/");
})

test('Dashboard link text is rendered', () => {
  render(<Router><Navbar /></Router>);
  const linkElement = screen.getByText("Dashboard");
  expect(linkElement).toBeInTheDocument();
});

test('Courses link text is rendered', () => {
  render(<Router><Navbar /></Router>);
  const linkElement = screen.getByText("Courses");
  expect(linkElement).toBeInTheDocument();
});

test('Settings link text is rendered', () => {
  render(<Router><Navbar /></Router>);
  const linkElement = screen.getByText("Settings");
  expect(linkElement).toBeInTheDocument();
});

test('Students link text is rendered', () => {
  render(<Router><Navbar /></Router>);
  const linkElement = screen.getByText("Students");
  expect(linkElement).toBeInTheDocument();
});

test('Enrollment link text is rendered', () => {
  render(<Router><Navbar /></Router>);
  const linkElement = screen.getByText("Enrollment");
  expect(linkElement).toBeInTheDocument();
});

test('Dashboard has active class on page initial render', () => {
  render(<Router><Navbar /></Router>);
  const linkElement = screen.getByText("Dashboard");
  expect(linkElement).toHaveClass("active");
});

test('Courses has active class after Courses link clicked', () => {
  render(<Router><Navbar /></Router>);
  userEvent.click(screen.getByText('Courses'));
  expect(screen.getByText('Courses')).toHaveClass("active");
});

test('Students has active class after Students link clicked', () => {
  render(<Router><Navbar /></Router>);
  userEvent.click(screen.getByText('Students'));
  expect(screen.getByText('Students')).toHaveClass("active");
});

test('Settings has active class after Settings link clicked', () => {
  render(<Router><Navbar /></Router>);
  userEvent.click(screen.getByText('Settings'));
  expect(screen.getByText('Settings')).toHaveClass("active");
});

test('Dashboard has active class after Settings link and then Dashboard is clicked', () => {
  render(<Router><Navbar /></Router>);
  userEvent.click(screen.getByText('Settings'));
  userEvent.click(screen.getByText('Dashboard'));
  expect(screen.getByText('Dashboard')).toHaveClass("active");
});

test('Students on hover svg is rendered when Students link is clicked', () => {
  render(<Router><Navbar /></Router>);
  expect(screen.queryByAltText('studentsonhover')).toBeNull();
  userEvent.click(screen.getByText('Students'));
  expect(screen.getByAltText('studentsonhover')).toBeInTheDocument();
});

test('Courses on hover svg is rendered when Courses link is clicked', () => {
  render(<Router><Navbar /></Router>);
  expect(screen.queryByAltText('bookonhover')).toBeNull();
  userEvent.click(screen.getByText('Courses'));
  expect(screen.getByAltText('bookonhover')).toBeInTheDocument();
});

test('Settings on hover svg is rendered when Settings link is clicked', () => {
  render(<Router><Navbar /></Router>);
  expect(screen.queryByAltText('nutonhover')).toBeNull();
  userEvent.click(screen.getByText('Settings'));
  expect(screen.getByAltText('nutonhover')).toBeInTheDocument();
});

test('Enrollment on hover svg is rendered when Enrollment link is clicked', () => {
  render(<Router><Navbar /></Router>);
  expect(screen.queryByAltText('medalsonhover')).toBeNull();
  userEvent.click(screen.getByText('Enrollment'));
  expect(screen.getByAltText('medalsonhover')).toBeInTheDocument();
});

test('Enrollment non on hover svg is rendered when Courses link is clicked', () => {
  render(<Router><Navbar /></Router>);
  expect(screen.queryByAltText('house')).toBeNull();
  userEvent.click(screen.getByText('Courses'));
  console.log(window.location.href)
  expect(screen.getByAltText('house')).toBeInTheDocument();
});

test('Logo is there on initial render', () => {
  render(<Router><Navbar /></Router>);
  expect(screen.getByAltText('logo')).toBeInTheDocument();
});

// Testing the Routing paths.-


test('Courses path is reached when Courses link is clicked', () => {
  render(<Router><Navbar /></Router>);
  userEvent.click(screen.getByText('Courses'));
  expect(window.location.href).toBe("http://localhost/courses");
});

test('Enrollment path is reached when Enrollment link is clicked', () => {
  render(<Router><Navbar /></Router>);
  userEvent.click(screen.getByText('Enrollment'));
  expect(window.location.href).toBe("http://localhost/enrollment");
});

test('Settings path is reached when Settings link is clicked', () => {
  render(<Router><Navbar /></Router>);
  userEvent.click(screen.getByText('Settings'));
  expect(window.location.href).toBe("http://localhost/settings");
});

test('Students path is reached when Students link is clicked', () => {
  render(<Router><Navbar /></Router>);
  userEvent.click(screen.getByText('Students'));
  expect(window.location.href).toBe("http://localhost/students");
});













// console.log(window.location.href);