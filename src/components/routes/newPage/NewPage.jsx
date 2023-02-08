import React from "react";
import { useTasks } from "../../hooks/useTasks";
import { TodoForm } from "../../TodoForm";

export function NewPage() {
    const { addTask } = useTasks();
    
    return (
        <>
            <TodoForm 
                formTitle={"Add a new task to your list:"}
                defaultTaskText={undefined}
                buttonText={"Add Task"}
                submitAction={(text) => addTask(text)}
            />
        </>
    );
}