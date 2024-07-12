import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = window.localStorage.getItem('todos');
    if (!savedTodos) return [];
    return JSON.parse(savedTodos);
  });

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const todoAdd = text => {
    const newTodo = {
      id: nanoid(),
      text: text,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Form onSubmit={todoAdd} />
      {todos.length > 0 ? (
        <TodoList todos={todos} removeTodo={removeTodo} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
