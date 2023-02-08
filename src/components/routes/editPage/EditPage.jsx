import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../../TodoForm";
import { useTasks } from "../../hooks/useTasks";

export function EditPage() {
    const params = useParams();
    const taskID = Number(params.id);
    const location = useLocation();
    const { getTask, editTask, loading } = useTasks();

    let taskText;

    if (location.state?.todo) {
        taskText = location.state.todo.title;
    } else if (loading) {
        return <p>Cargando</p>
    } else {
        taskText = getTask(taskID).title;   
    }

    return (
        <>
            <TodoForm 
                formTitle={"Edit your task:"}
                defaultTaskText={taskText}
                buttonText={"Edit Task"}
                submitAction={(newText) => editTask(taskID, newText)}
            />
        </>
    );
}