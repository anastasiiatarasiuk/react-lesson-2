import style from './TodoListItem.module.css';
import { Text } from 'components';
import { RiDeleteBinLine } from 'react-icons/ri';

export const TodoListItem = ({ counter, descr, id, removeTodo }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO {counter}
      </Text>
      <Text>{descr}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => {
          removeTodo(id);
        }}
      >
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
