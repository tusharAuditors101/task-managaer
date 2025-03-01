const express = require('express');
const Task = require('./models');
const router = express.Router();

router.get('/', async (req, res) => { //get all tasks
  const tasks = await Task.find();
  res.json(tasks);
});

router.post('/', async (req, res) => { //create task
  const newTask = new Task(req.body);
  await newTask.save();
  res.json(newTask);
});

router.put('/:id', async (req, res) => { //update task
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTask);
});

router.delete('/:id', async (req, res) => { //delete task
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});

module.exports = router;