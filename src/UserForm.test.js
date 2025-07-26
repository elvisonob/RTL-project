import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('user interaction', () => {
  const mock = jest.fn();
  // render on screen
  render(<UserForm onUserAdd={mock} />);

  // user clicks both forms

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });

  // Find the two inputs
  user.click(nameInput);
  user.keyboard('janedoe');

  user.click(emailInput);
  user.keyboard('jane@hotmail.com');

  // user clicks a button
  const button = screen.getByRole('button');
  user.click(button);

  // assert
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: 'janedoe',
    email: 'jane@hotmail.com',
  });
});
