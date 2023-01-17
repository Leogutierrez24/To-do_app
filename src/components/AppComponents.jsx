import React from "react";
import { useTaskContext } from "./context/TaskContext";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoAddButton } from "./TodoAddButton";
import { TodoHeader } from "./TodoHeader";
import { TodoHidden } from "./TodoHidden";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";
import { EmptyComponent } from "./EmptyComponent";
import { AddNewTodo } from "./AddNewTodo";
import { Loader } from "./Loader";

export function AppComponents(){
    const { error, loading, taskValue, searchedTasks, completeTask, deleteTask, modalStatus } = useTaskContext();

    return(
        <>
        <div>
          <TodoHeader />
          <TodoCounter />
          <TodoSearch />
          <TodoList>
            {error && <p>Ocurrio un error</p>}
            {loading && <Loader />}
            {(!loading && searchedTasks.length === 0 && taskValue === "") && <AddNewTodo />}
            {(taskValue.length !== 0 && searchedTasks.length === 0) && <EmptyComponent />}
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
        {
          modalStatus && <Modal>
                          <div className="modal-content">
                            <TodoForm />
                          </div>
                        </Modal>
        }
        </>
    );
}