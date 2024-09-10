import React, {useState} from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

    const addTask = () => {
        if(newTask.trim() !== "") {
            setTasks( prev => [...prev, newTask]);
            setNewTask("");
        }
    }
    const deleteTask = (index) => {
        setTasks( prev => prev.filter((_,i) => i !== index))
    }
    const moveTaskUp = (index) => {
        if(index > 0) {
            const updateTasks = [...tasks];
            [ updateTasks[index], updateTasks[index-1]] = [ updateTasks[index-1], updateTasks[index]]
            setTasks(updateTasks);
        }
    }
    const moveTaskDown = (index) => {
        if(index < tasks.length - 1) {
            const updateTasks = [...tasks];
            [ updateTasks[index], updateTasks[index+1]] = [ updateTasks[index+1], updateTasks[index]]
            setTasks(updateTasks);
        }
    }
    return (
    <div className="to-do-list">
        <h1>To-do-list</h1>
        <div>
            <input
                type="text"
                placeholder="Enter a task ..."
                value={newTask}
                onChange={handleInputChange}
            />
            <button
                className="add-button"
                onClick={addTask}
            >
            ADD
            </button>
        </div>

        <ol>
            {tasks.map( (task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>

                    <button className="delete-button"
                        onClick={() =>  deleteTask(index)}
                    >
                        Delete
                    </button>

                    <button className="move-button"
                        onClick={() => moveTaskUp(index)}
                    >
                        Up
                    </button>

                    <button className="move-button"
                        onClick={() => moveTaskDown(index)}
                    >
                        Down
                    </button>

                </li>
            )}
        </ol>
    </div>
    );
}
export default ToDoList;