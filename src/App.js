import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('')
  const [users, setUsers] = useState([])


  useEffect(() => {
    fetch('/api').then(res => res.json()).then(data => setMessage(data.message))
    fetch('/api/users').then(res => res.json()).then(setUsers)
  }, [])
  return (
    <div className="App">
      <h1>{message}</h1>
      <ul>
        {users.map((user, index) => <li key={index}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
