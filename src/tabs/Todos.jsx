import { Form, Text } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const todoAdd = text => {
    const newTodo = {
      id: nanoid(),
      text: text,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <>
      <Form onSubmit={todoAdd} />
      {/* <Text textAlign="center">There are no any todos ...</Text> */}
    </>
  );
};
