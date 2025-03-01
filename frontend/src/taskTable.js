import React, { useState } from 'react';
import EditModal from './editModal';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const TaskTable = ({ tasks, handleEdit }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [task, setTask] = useState(null);

    const openModal = (task) => {
        setTask(task);
        setIsOpen(true);
    };

    return (
        <>
            <TableContainer component={Paper} sx={{  margin: "auto", mt: 3 , width: "100%"}}>
                <Table>
                    {/* Table Header */}
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Task</strong></TableCell>
                            <TableCell><strong>Description</strong></TableCell>
                            <TableCell><strong>Completed</strong></TableCell>
                            <TableCell><strong>Actions</strong></TableCell>
                        </TableRow>
                    </TableHead>

                    {/* Table Body */}
                    <TableBody>
                        {tasks.map((task) => (
                            <TableRow key={task._id}>
                                <TableCell>{task.title}</TableCell>
                                <TableCell>{task.description}</TableCell>
                                <TableCell>{task.completed ? "Yes" : "No"}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        startIcon={<Edit />}
                                        onClick={() => openModal(task)}  // ✅ FIXED: Correct function call
                                        sx={{ mr: 1 }}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        size="small"
                                        startIcon={<Delete />}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div id="modal-root"></div>

            <EditModal 
                    task={task} 
                    isOpen={isOpen} 
                    handleClose={() => setIsOpen(false)} 
                    handleEdit={handleEdit} 
                />
        </>
    );
};

export default TaskTable;
