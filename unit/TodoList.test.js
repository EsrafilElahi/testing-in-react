import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';


describe('TodoList Component', () => {
  test('renders TodoList with no todos', () => {
    // Render the component with no initial todos
    const { getByText, queryByText, getByRole } = render(<TodoList />);

    // Check if the heading and input elements are in the document
    const headingElement = getByText('Todo List');
    const inputElement = getByRole('textbox');

    // Expect no todo items in the list
    const todoItem = queryByText('Todo Item 1');
    expect(todoItem).not.toBeInTheDocument();
  });

  test('adds a new todo', () => {
    // Render the component with no initial todos
    const { getByRole, getByText } = render(<TodoList />);

    // Get the input element and add a new todo
    const inputElement = getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'New Todo' } });

    // Click the "Add Todo" button
    const addButton = getByText('Add Todo');
    fireEvent.click(addButton);

    // Expect the new todo to be in the list
    const todoItem = getByText('New Todo');
    expect(todoItem).toBeInTheDocument();
  });

  test('deletes a todo', () => {
    // Render the component with initial todos
    const { getByText, getByRole, queryByText } = render(<TodoList />);
    fireEvent.change(getByRole('textbox'), { target: { value: 'Todo 1' } });
    fireEvent.click(getByText('Add Todo'));

    // Get the "Delete" button and click it
    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);

    // Expect the todo to be removed from the list
    const deletedTodo = queryByText('Todo 1');
    expect(deletedTodo).not.toBeInTheDocument();
  });
});

describe('TodoList Component', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
  });
});