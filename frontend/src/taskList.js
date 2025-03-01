import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskTable from './taskTable.js';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.log(error));
    }, []);

    const handleEdit = (updatedTask) => {
        axios.put(`http://localhost:3000/api/tasks/${updatedTask._id}`, updatedTask)
            .then(response => {
                const newTask = response.data;
                setTasks(prevTasks =>
                    prevTasks.map(task => task._id === newTask._id ? newTask : task)
                );
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskTable tasks={tasks} handleEdit={handleEdit} />
        </div>
    );
};

export default TaskList;