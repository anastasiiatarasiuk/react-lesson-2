import { EditForm, Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = window.localStorage.getItem('todos');
    if (!savedTodos) return [];
    return JSON.parse(savedTodos);
  });

  // const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

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

  const toggleForm = selectedTodo => {
    // setIsEditing(true);
    setCurrentTodo(selectedTodo);
  };

  const cancelEditing = () => {
    // setIsEditing(false);
    setCurrentTodo(null);
  };

  const editTodo = updatedTodo => {
    const index = todos.findIndex(todo => todo.id === updatedTodo.id);
    // if (index === -1) return;.
    setTodos(todos.toSpliced(index, 1, updatedTodo));
    cancelEditing();
  };

  return (
    <>
      {currentTodo ? (
        <EditForm
          currentTodo={currentTodo}
          cancelEditing={cancelEditing}
          onSubmit={editTodo}
        />
      ) : (
        <Form onSubmit={todoAdd} />
      )}

      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleForm={toggleForm}
        />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
