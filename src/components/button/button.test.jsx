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

test('Button to have class fifth', () => {
  render(<Button text="Cancel" btnStyle="fifth"/>);
  const buttonElement = screen.getByText("Cancel");
  expect(buttonElement).toHaveClass("button-fifth");
});

test('Button to have class sixth', () => {
  render(<Button text="Confirm" btnStyle="sixth"/>);
  const buttonElement = screen.getByText("Confirm");
  expect(buttonElement).toHaveClass("button-sixth");
});

test('Button has button1 class as default', () => {
  render(<Button text="Upload" btnStyle="fourth"/>);
  const buttonElement = screen.getByText("Upload");
  console.log(window.location.href);
  expect(buttonElement).toHaveClass("button1");
});