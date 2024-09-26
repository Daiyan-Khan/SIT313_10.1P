import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

test('renders login form and handles submission', () => {
  const mockLogin = jest.fn(); // Mock function for handling login

  render(<Login onLogin={mockLogin} />);

  // Check if the email input is in the document
  const emailInput = screen.getByLabelText(/Email:/i);
  expect(emailInput).toBeInTheDocument();

  // Check if the password input is in the document
  const passwordInput = screen.getByLabelText(/Password:/i);
  expect(passwordInput).toBeInTheDocument();

  // Check if the login button is in the document
  const loginButton = screen.getByRole('button', { name: /Login/i });
  expect(loginButton).toBeInTheDocument();

  // Simulate user typing email and password
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  // Simulate form submission
  fireEvent.click(loginButton);

  // Check if mockLogin is called with correct email and password
  expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123');
});
