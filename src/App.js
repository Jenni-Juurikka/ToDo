import './App.css';
import axios from "axios";
import {useState, useEffect} from 'react';

const URL = "http://localhost:3001";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(URL)
      .then((res) => {
        setTasks(res.data);
      }).catch(error => {
        alert(error.res.data.error);
      })
  }, [])

  return (
    <div>
      <h4>To-do list:</h4>
      <ol>
        {tasks.map(task => (
          <li key={task.id}>{task.descript}</li>
        ))}
      </ol>
    </div>
  );
}
