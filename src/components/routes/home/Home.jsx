import React from "react";
import { TodoCounter } from "../../TodoCounter";
import { TodoSearch } from "../../TodoSearch";
import { TodoList } from "../../TodoList";
import { TodoItem } from "../../TodoItem";
import { TodoAddButton } from "../../TodoAddButton";
import { TodoHeader } from "../../TodoHeader";
import { TodoHidden } from "../../TodoHidden";
import { Modal } from "../../Modal";
import { TodoForm } from "../../TodoForm";
import { EmptyComponent } from "../../EmptyComponent";
import { AddNewTodo } from "../../AddNewTodo";
import { Loader } from "../../Loader";
import { TodoBody } from "../../TodoBody";
import { TodoFooter } from "../../TodoFooter";
import { useTasks } from "../../hooks/useTasks";

export function Home() {
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