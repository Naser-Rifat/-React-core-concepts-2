import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>

    </div>
  );
}


function ExternalUsers() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))

  }, [])

  return (
    <div>
      <h4> external users</h4>
      {
        users.map(user => <User name={user.name} email={user.email}> </User>)
      }

    </div>
  )
}
function User(props) {
  return (
    <div>
      <h2>name: <span>{props.name}</span></h2>
      <p>name:{props.email}</p>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(0);
  const handelIncrease = () => setCount(count + 1)
  const handelDecrease = () => setCount(count - 1)

  /*   {
      const newCount = count + 1;
      setCount(newCount);
  } */
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handelIncrease}>increase</button>
      <button onClick={handelDecrease}>Decrease</button>
    </div>
  )
}

export default App;
