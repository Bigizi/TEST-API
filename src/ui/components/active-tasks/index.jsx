import { useEffect, useState } from "react"
import TaskRepositoryImpl from "../../../data/repository/task-repository-impl";

export default function ActiveTasks(){
    const [tasks, setTasks] = useState([]);
   
    useEffect(()=>{
        const repo = new TaskRepositoryImpl();
        repo.getCompletedTasks().then(response=>{
            setTasks(response);
        });

    }, []);

    return <ul>
       {tasks.map((task, index)=>{
        return <li key={`task-${index}`}>
            <img alt="" width="80" src={task.icon} />
            {task.name}
        </li>
       })}
    </ul>
}