import { useState } from "react";
import { useLocalStorage } from "./components/hooks/useLocalStorage";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoAddButton } from "./components/TodoAddButton";
import { TodoHeader } from "./components/TodoHeader";
import { TodoHidden } from "./components/TodoHidden";

// const defaultTodos = [
//   {title: "Ganarle al campéon de América", status: true},
//   {title: "Ganarle al campéon de Europa", status: false},
//   {title: "Ser campéon del mundo", status: false}
// ];

function App() {
  const { item: tasks, saveItem: saveTasks, loading, error } = useLocalStorage("TASKS_V1", []);
  const [taskValue, setTaskValue] = useState("");

  const completedTasks = tasks.filter(task => !!task.status).length;
  const totalTasks = tasks.length;

  let searchedTasks = [];

  if(taskValue.length <= 0){
    searchedTasks = tasks;
  } else {
    searchedTasks = tasks.filter(task => {
      const taskText = task.title.toLocaleLowerCase();
      const searchText = taskValue.toLocaleLowerCase();
      
      return taskText.includes(searchText);
    });
  }

  const completeTask = (title) => {
    let updatedTasks = [...tasks];
    const taskIndex = updatedTasks.findIndex(task => task.title === title);

    updatedTasks[taskIndex].status = true;
    saveTasks(updatedTasks);
  }

  const deleteTask = (title) => {
    let updatedTasks = [...tasks];
    const taskIndex = updatedTasks.findIndex(task => task.title === title);

    updatedTasks.splice(taskIndex, 1);
    saveTasks(updatedTasks);
  }

  return (
    <>
      <div>
        <TodoHeader />
        <TodoCounter 
          total={totalTasks}
          completed={completedTasks}
        />
        <TodoSearch 
          taskValue={taskValue} 
          setTaskValue={setTaskValue}
        />
        <TodoList>
          {error && <p>Ocurrio un error</p>}
          {loading && <p>Cargando...</p>}
          {(!loading && searchedTasks.length === 0) && <h2>Create a new task!!!</h2>}
          {
            searchedTasks.map((todo) => {
              return <TodoItem 
                        key={todo.title} 
                        title={todo.title}
                        status={todo.status}
                        onComplete={completeTask}
                        onDelete={deleteTask}
                      />
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
