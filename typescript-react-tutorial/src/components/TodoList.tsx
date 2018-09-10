import * as React from 'react';
import TodoItem from './TodoItem';

interface Props {
  [prop: string]: never
}

interface TodoItemData {
  id: number;
  text: string;
  done: boolean;
}

interface State {
  input: string;
  todoItems: TodoItemData[];
}

class TodoList extends React.Component<Props, State> {

  private id: number = 0;

  private state: State = {
    input: '',
    todoItems: []
  };

  public onToggle = (id: number): void => {
    const { todoItems } = this.state;
    const index = todoItems.findIndex(todo => todo.id === id);
    const selectedItem = todoItems[index];
    const nextItems = [ ...todoItems ];

    const nextItem = {
      ...selectedItem,
      done: !selectedItem.done,
    };

    nextItems[index] = nextItem; // データの差し替え
  }

  public onRemove = (id: number): void => {
    this.setState(
      ({ todoItems }) => ({
        todoItems: todoItems.filter(todo => todo.id !== id)
      })
    );
  }

  public onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    this.setState({
      input: value
    });
  }

  public onSubmit = (e: React.FormEvent<HTMLFontElement>): void => {
    e.preventDefault(); //  自動ページ遷移をブロック
    //  inputをカラにし、todoItemsを追加
    this.setState(
      ({ todoItems, input }) => ({
        input: '',
        todoItems: todoItems.concat({
          done: false,
          id: this.id ++,
          text: input,
        })
      })
    );
  }

  public render() {
    const { onSubmit, onChange, onRemove, onToggle } = this;
    const { input, todoItems } = this.state;

    const todoItemList = todoItems.map(
      todo => (
        <TodoItem 
          key={todo.id}
          done={todo.done}
          onToggle={() => onToggle(todo.id)}
        />
      )
    );

    return (
      <div>
        d
      </div>
    );
  }
}

export default TodoList;