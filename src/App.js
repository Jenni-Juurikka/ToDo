import './App.css';
import axios from "axios";
import {useState, useEffect} from 'react';

const URL = "http://localhost:3001";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    axios.get(URL)
      .then((res) => {
        setTasks(res.data)
      }).catch(error => {
        alert(error.res.data.error)
      })
  }, [])

  function save() {
    const json = JSON.stringify({descript: task})
    axios.post(URL + "new",json,{
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then((res) => {
      // Convert stringifyed JSON object back to JavaScript object
      const addedobject = JSON.parse(json)
      // Add id returned by server to object
      addedobject.id = res.data.id
      // Update state variable with newly added data
      setTasks(tasks => [...tasks, addedobject])
      setTask("")
    }).catch(error => {
      alert(error.res.data.error)
    })
  }

  return (
    <div>
      <form>
        <label>New task</label>
        <input value={task} onChange={e => setTask(e.target.value)}/>

        <button type='button' onClick={save}>Save</button>
      </form>
      <h4>To-do list:</h4>
      <ol>
        {tasks.map(task => (
          <li key={task.id}>{task.descript}</li>
        ))}
      </ol>
    </div>
  );
}
