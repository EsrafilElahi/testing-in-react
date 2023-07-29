import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('handleIncrement function increments count correctly', () => {
  // rendering the component we want to test
  const { getByText } = render(<Counter />);

  // Get the button element
  const button = getByText('Increment');

  // Click the button twice
  fireEvent.click(button);
  fireEvent.click(button);

  // Get the count element
  const countElement = getByText('Count: 2');

  // Assert that count is updated correctly
  expect(countElement).toBeInTheDocument();
});
