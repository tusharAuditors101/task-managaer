import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Checkbox, FormControlLabel } from "@mui/material";


const EditModal = ({ task, handleClose, handleEdit, isOpen }) => { //task is the task to be edited
    const [title, setTitle] = useState(task?.title || "");
    const [description, setDescription] = useState(task?.description || "");
    const [completed, setCompleted] = useState(task?.completed || false);

    // ✅ Use `useEffect` to update state when `task` changes
    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setCompleted(task.completed);
        }
    }, [task]);

    if (!isOpen) return null;
    const handleSubmit = async event => {
        event.preventDefault();
        console.log({ title, description, completed, _id: task._id })
        await handleEdit({ title, description, completed, _id: task._id });
        handleClose();
    }

    return ReactDOM.createPortal(
        <Dialog open={isOpen} onClose={handleClose} maxWidth="sm" fullWidth>
            {/* Modal Title */}
            <DialogTitle>Edit Task</DialogTitle>

            {/* Modal Content */}
            <DialogContent>
                <TextField
                    label="Title"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    label="Description"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <FormControlLabel
                    control={<Checkbox checked={completed} onChange={(e) => setCompleted(e.target.checked)} />}
                    label="Completed"
                />
            </DialogContent>

            {/* Modal Actions */}
            <DialogActions>
                <Button onClick={handleClose} color="error" variant="contained">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary" variant="contained">
                    Save
                </Button>
            </DialogActions>
        </Dialog>,
        document.getElementById("modal-root") // Ensure there's a div with id "modal-root" in index.html
    );
}

export default EditModal;