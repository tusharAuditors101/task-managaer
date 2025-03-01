import React, { useEffect, useState } from 'react';
import EditModal from './editModal';

const TaskTable = ({ tasks, handleEdit }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [task, setTask] = useState(null);
    const openModal = task => () => {
        setTask(task);
        setIsOpen(true);
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task._id}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.completed ? 'Yes' : 'No'}</td>
                            <td>
                                <button onClick={openModal(task)}>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div id="modal-root"></div>
            <EditModal task={task} isOpen={isOpen} handleClose={() => setIsOpen(false)} handleEdit={handleEdit} />
        </>

    )
}

export default TaskTable;