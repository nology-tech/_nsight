import { render, screen } from '@testing-library/react';
import Button from './button.jsx';
import userEvent from "@testing-library/user-event";

//Using render method -> tells us that we want to work with the functionality of that specific component.

test('Button to have class button primary', () => {
  render(<Button text="Save" />);
  const buttonElement = screen.getByText("Save");
  expect(buttonElement).toHaveClass("button primary");
});

test('Button to have class button secondary', () => {
  render(<Button text="+ Save" isSecondary/>);
  const buttonElement = screen.getByText("+ Save");
  expect(buttonElement).toHaveClass("button secondary");
});

test('Button to have class button primary-border', () => {
  render(<Button text="Cancel" isBorder/>);
  const buttonElement = screen.getByText("Cancel");
  expect(buttonElement).toHaveClass("button primary-border");
});

test('Button to have class button secondary-border', () => {
  render(<Button text="Cancel" isSecondary isBorder/>);
  const buttonElement = screen.getByText("Cancel");
  expect(buttonElement).toHaveClass("button secondary-border");
});


