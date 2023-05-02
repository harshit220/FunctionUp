import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';
import { useState } from 'react';

function App() {
const [users, setUsers] = useState([])
 const fetchUpdate=()=>{ fetch("https://reqres.in/api/users/").then((result) => result.json()).then((result) => setUsers(result.data))
 }

 const handleClick=()=>{
  fetchUpdate()
}

  return (
    <div className="App">
      <button onClick={handleClick}>Get Users</button>
      {users.map((user)=>{
        return <UserCard user={user} key={user.id}/>
      })}
    </div>
  );
}



export default App;
