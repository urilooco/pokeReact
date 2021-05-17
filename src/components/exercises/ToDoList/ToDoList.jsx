import React, { useState } from 'react';
import './ToDoList.css';

const ToDoList = () => {
  const [task, setTask] = useState('');
  const [items, setItems] = useState([]);
  const [taskEditing, setTaskEditing] = useState(null);


  const handleTaskChange = (event) => {
    setTask(event.target.value);
  }


  const handleAddTask = () => {
    if (task && !items.find(item => item.task === task)) {
      setItems(prevItems => [...prevItems,
      {
        task,
        completed: false,
      }
      ]);
    }
  }

  const handleDelete = (taskToDelete) => () => {
    setItems(prevItems => [...prevItems.filter(item => item.task !== taskToDelete)]);
  };


  const handleComplete = (taskToComplete) => () => {
    setItems(prevItems => {
      const itemToUpdate = {
        ...prevItems.find(item => item.task === taskToComplete),
        completed: true,
      }
      return [
        ...prevItems.filter(item => item.task !== taskToComplete),
        itemToUpdate
      ];
    });
  };

  const submitEdits = (taskToEdit) => () => {
    setItems(prevItems => {
      const itemToUpdate = {
        ...prevItems.find(item => item.task === taskToEdit), task
      }
      return [
        ...prevItems.filter(item => item.task !== taskToEdit),
        itemToUpdate
      ];
    });
  };

  return (
    <div id="Container">
      <div className="First-section">
        <input type="text" className="Initial-input" value={task} onChange={handleTaskChange} />
        <button type="button" className="Button-add" onClick={handleAddTask}>Add</button>
      </div>

      {items.map(item => (
        <div key={item.task} className="Second-section">
          <div className="Word-added">
            <span className={item.completed ? 'Task-done' : ''}>
              {item.task}
            </span>
            
          </div>
          <br/>
          <div className="Input-edit">
            {item.task === taskEditing ? (
              <input
                type="text"
                onChange={handleTaskChange}
              />
            ) : (
              <div>{item.task.text}</div>
            )}
          </div>
          <div className="Buttons-actions">
            {item.task === taskEditing ? (
              <button className="Edit-button" onClick={submitEdits(item.task)}>Submit Edits</button>
            ) : (
              <button className="Edit-button" onClick={() => setTaskEditing(item.task)}>Edit</button>
            )}

            <button className="Delete-button" onClick={handleDelete(item.task)}>Delete</button>
            <button className="Complete-button" onClick={handleComplete(item.task)}>Complete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;