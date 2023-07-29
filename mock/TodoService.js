export const fetchTodos = async () => {
  // Simulate fetching todos from an API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Todo 1', 'Todo 2']);
    }, 500);
  });
};
