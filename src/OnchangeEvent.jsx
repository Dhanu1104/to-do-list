import React, {useState} from "react";
import './onchange.css';
function ToDoList(){
    const [tasks,setTasks]=useState([]);
    const [newTask, setNewTask]=useState("");

    function handleChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ("")){
            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        const updateTasks = tasks.filter((element,i) => i !== index);

        setTasks(updateTasks);

    }
    function moveTaskUp(index){
        if(index > 0){
            const updateTasks = [...tasks];
            [updateTasks[index],updateTasks[index - 1]] = [updateTasks[index - 1],updateTasks[index]];
            setTasks(updateTasks);
        }

    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updateTasks = [...tasks];
            [updateTasks[index],updateTasks[index + 1]] = [updateTasks[index + 1],updateTasks[index]];
            setTasks(updateTasks);
        }

    }
    
    return(
        <div className="to-do-list">
            <h1>TO-DO-LIST</h1>
            <div>
            <input
            type="text"
            placeholder="Enter A Task"
            value={newTask}
            onChange={handleChange}/>
            <button class="add" onClick={addTask}>ADD</button>
            </div>
            <ol>
                {tasks.map((tasks,index) => 
                <li key={index}>
                    <span className="text">{tasks}</span>
                    <button className="delete" onClick={()=>deleteTask(index)}>DELETE</button>
                    <button className="move" onClick={()=>moveTaskUp(index)}>MoveUp</button>
                    <button className="move" onClick={()=>moveTaskDown(index)}>MoveDown</button>
                </li>)}
            </ol>

        </div>
    )

}
export default ToDoList;