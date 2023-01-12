import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoAddButton } from "./components/TodoAddButton";
import { TodoHeader } from "./components/TodoHeader";
import { TodoHidden } from "./components/TodoHidden";

const todos = [
  {title: "Ganarle al campéon de América", status: false},
  {title: "Ganarle al campéon de Europa ", status: false},
  {title: "Ser campéon del mundo", status: false}
];

function App() {
  return (
    <>
      <div>
        <TodoHeader />
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {
            todos.map((todo) => {
              return <TodoItem key={todo.title} title={todo.title} />
            })
          }
        </TodoList>
        <TodoAddButton />
      </div>
      <div style={{height: "200px", display: "flex"}}>
        <TodoHidden />
      </div>
    </>
  );
}

export default App;
