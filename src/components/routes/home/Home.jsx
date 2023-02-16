import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TodoCounter } from "../../TodoCounter";
import { TodoSearch } from "../../TodoSearch";
import { TodoList } from "../../TodoList";
import { TodoItem } from "../../TodoItem";
import { TodoAddButton } from "../../TodoAddButton";
import { TodoHeader } from "../../TodoHeader";
import { TodoHidden } from "../../TodoHidden";
import { EmptyComponent } from "../../EmptyComponent";
import { AddNewTodo } from "../../AddNewTodo";
import { Loader } from "../../Loader";
import { TodoBody } from "../../TodoBody";
import { TodoFooter } from "../../TodoFooter";
import { useTasks } from "../../hooks/useTasks";

export function Home() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams({});

    const {
        error,
        loading, 
        taskValue,
        totalTasks,
        searchedTasks, 
        hiddenSection, 
        tasksCompleted, 
        setTaskValue,
        completeTask, 
        removeTask,
        handleHiddenSection, 
        resetTask, 
        removeCompletedTask,
      } = useTasks();

    return (
        <>
            <TodoHeader loading={loading}>
                <TodoCounter totalTasks={totalTasks}/>
                <TodoSearch 
                    taskValue={taskValue}
                    setTaskValue={setTaskValue}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                />
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
                                        id={todo.id}
                                        status={todo.status}
                                        onComplete={completeTask}
                                        onDelete={removeTask}
                                        onEdit={() => navigate(`/edit/${todo.id}`, { state: { todo } })}
                                        showEdit={true}
                                    />})}
                </TodoList> 
            </TodoBody>
            <TodoAddButton 
                onClick={ () => navigate("/new") }
            />
            <TodoFooter>
                <TodoHidden 
                    handleHiddenSection={handleHiddenSection}
                    hiddenSection={hiddenSection} 
                    tasksCompleted={tasksCompleted}
                    resetTask={resetTask}
                    removeCompletedTask={removeCompletedTask}
                />
            </TodoFooter>
        </>
    );
}