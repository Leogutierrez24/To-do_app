import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoAddButton } from "./components/TodoAddButton";
import { TodoHeader } from "./components/TodoHeader";
import { TodoHidden } from "./components/TodoHidden";
import { Modal } from "./components/Modal";
import { TodoForm } from "./components/TodoForm";
import { EmptyComponent } from "./components/EmptyComponent";
import { AddNewTodo } from "./components/AddNewTodo";
import { Loader } from "./components/Loader";
import { TodoBody } from "./components/TodoBody";
import { TodoFooter } from "./components/TodoFooter";
import { useTasks } from "./components/hooks/useTasks";

function App(){
  const {
    error,
    loading, 
    taskValue,
    setTaskValue,
    totalTasks,
    searchedTasks, 
    completeTask, 
    deleteTask,
    handleModal,
    modalStatus,
    handleHiddenSection, 
    hiddenSection, 
    tasksCompleted, 
    resetTask, 
    deleteCompletedTask,
    addTask
  } = useTasks();

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter totalTasks={totalTasks}/>
        <TodoSearch taskValue={taskValue} setTaskValue={setTaskValue}/>
      </TodoHeader>
      <TodoBody>
        <TodoList>
          {loading && <Loader />}
          {error && <p>Ocurrio un error</p>}
          {(!loading && searchedTasks.length === 0 && taskValue === "") && <AddNewTodo />}
          {(taskValue.length !== 0 && searchedTasks.length === 0) && <EmptyComponent />}
          {searchedTasks?.map((todo) => {
                      return <TodoItem 
                                key={todo.id} 
                                title={todo.title}
                                status={todo.status}
                                onComplete={completeTask}
                                onDelete={deleteTask}
                              />})}
        </TodoList> 
      </TodoBody>
      <TodoAddButton handleModal={handleModal} modalStatus={modalStatus} />
      <TodoFooter>
        <TodoHidden 
          handleHiddenSection={handleHiddenSection}
          hiddenSection={hiddenSection} 
          tasksCompleted={tasksCompleted}
          resetTask={resetTask}
          deleteCompletedTask={deleteCompletedTask}
        />
      </TodoFooter>
      {
        modalStatus && <Modal>
                        <div className="modal-content">
                          <TodoForm addTask={addTask} handleModal={handleModal} />
                        </div>
                      </Modal>
      }
      
      </>
  );
}

export default App;