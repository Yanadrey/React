import React, { useState } from 'react';
import { TextField, Button, Card, ListItem, IconButton, List } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <TextField
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                label="Add Task"
            />
            <Button onClick={addTask} variant="contained">Add Task</Button>

            <List>
                {tasks.map((task, index) => (
                    <ListItem key={index}>
                        <Card style={{ width: '100%' }}>
                            <div>{task}</div>
                            <IconButton onClick={() => deleteTask(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </Card>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default TodoList;