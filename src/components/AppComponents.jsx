import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoAddButton } from "./TodoAddButton";
import { TodoHeader } from "./TodoHeader";
import { TodoHidden } from "./TodoHidden";
import { useTaskContext } from "./context/TaskContext";

export function AppComponents(){
    const { error, loading, searchedTasks, completeTask, deleteTask } = useTaskContext();

    return(
        <>
        <div>
          <TodoHeader />
          <TodoCounter />
          <TodoSearch />
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