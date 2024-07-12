import { Grid, GridItem, TodoListItem } from 'components';

export const TodoList = ({ todos, removeTodo, toggleForm }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoListItem
            counter={index + 1}
            descr={todo.text}
            id={todo.id}
            removeTodo={removeTodo}
            toggleForm={toggleForm}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
