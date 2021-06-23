const express = require('express');

const {Todo} = require('../model/todo');

const router = express.Router();

router.get('/', async(req, res) => {
    const todo = await Todo.find()
    if(!todo) return res.status(401).send("No todo found")
    return res.status(200).send(todo)
})

router.post('/', async (req, res) => {
    const todo = new Todo({
        task: req.body.task,
        createdDate: req.body.createdDate,
        completed: req.body.completed,
    })
    const result = await todo.save();
    return res.status(200).send(result);
})

router.patch('/:todo_id', async (req, res) => {
    
})

module.exports = router