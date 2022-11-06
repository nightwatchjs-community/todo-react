import Todo from '../../src/components/Todo.jsx';
import { fireEvent, within } from '@testing-library/dom';
export default {
  title: 'Todo component',
  component: Todo
};

export const TodoComponent = Object.assign(() => <Todo />);
