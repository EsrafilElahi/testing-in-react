import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import TodoList from './TodoList';
import * as TodoService from './TodoService';

jest.mock('./TodoService');

describe('TodoList Component', () => {
  test('renders TodoList with fetched todos', async () => {
    // Mock the behavior of fetchTodos to return some dummy todos
    TodoService.fetchTodos.mockResolvedValue(['Todo 1', 'Todo 2']);

    const { getByText } = render(<TodoList />);

    // Wait for todos to be fetched
    await waitFor(() => {
      expect(getByText('Todo 1')).toBeInTheDocument();
      expect(getByText('Todo 2')).toBeInTheDocument();
    });
  });

  test('adds a new todo', () => {
    const { getByRole, getByText } = render(<TodoList />);

    const inputElement = getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'New Todo' } });

    const addButton = getByText('Add Todo');
    fireEvent.click(addButton);

    const todoItem = getByText('New Todo');
    expect(todoItem).toBeInTheDocument();
  });

  test('deletes a todo', () => {
    const { getByText, getByRole, queryByText } = render(<TodoList />);
    fireEvent.change(getByRole('textbox'), { target: { value: 'Todo 1' } });
    fireEvent.click(getByText('Add Todo'));

    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);

    const deletedTodo = queryByText('Todo 1');
    expect(deletedTodo).not.toBeInTheDocument();
  });
});
