import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App'; // Assuming App is the main component that renders LoginForm and WelcomeMessage

test('integration test: user login and welcome message', async () => {
  // Render the App component (the main component that includes LoginForm and WelcomeMessage)
  const { getByPlaceholderText, getByText } = render(<App />);

  // Get the username and password input elements
  const usernameInput = getByPlaceholderText('Username');
  const passwordInput = getByPlaceholderText('Password');

  // Enter username and password
  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

  // Get the login button and click it
  const loginButton = getByText('Login');
  fireEvent.click(loginButton);

  // Wait for the login simulation to complete (500ms)
  await waitFor(() => expect(getByText('Welcome, testuser!')).toBeInTheDocument());
});
