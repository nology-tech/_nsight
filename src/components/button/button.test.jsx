import { render, screen } from '@testing-library/react';
import Button from './button.jsx';
import userEvent from "@testing-library/user-event";

//Using render method -> tells us that we want to work with the functionality of that specific component.

test('Button to be rendered with correct text', () => {
  render(<Button text="+ Save" btnStyle="secondary"/>);
  const buttonElement = screen.getByText("+ Save");
  expect(buttonElement).toBeInTheDocument();
});

test('Button to have class secondary', () => {
  render(<Button text="+ Save" btnStyle="secondary"/>);
  const buttonElement = screen.getByText("+ Save");
  expect(buttonElement).toHaveClass("button-secondary");
});

test('Button to have class primary', () => {
  render(<Button text="Cancel" btnStyle="primary"/>);
  const buttonElement = screen.getByText("Cancel");
  expect(buttonElement).toHaveClass("button-primary");
});

test('Button to have class tertiary', () => {
  render(<Button text="Cancel" btnStyle="tertiary"/>);
  const buttonElement = screen.getByText("Cancel");
  expect(buttonElement).toHaveClass("button-tertiary");
});

test('Button to have class fourth', () => {
  render(<Button text="Upload" btnStyle="fourth"/>);
  const buttonElement = screen.getByText("Upload");
  expect(buttonElement).toHaveClass("button-fourth");
});