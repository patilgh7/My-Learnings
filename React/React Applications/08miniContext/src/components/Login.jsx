import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

function Login() {
  // username and password from input tag takes values and these values will change in many time
  // so we need useState()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //  const {setUser} this variable we are taking from UserContextProvider.jsx file
  // In project we can have multiple context like LoginContext, ProductContext in that case we use below syntax
  const {setUser} = useContext(UserContext)

  // handleSubmit function work on button event
  // preventDefault() we have used because when we submit the data by default it goes with url thats why we use this method
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password})
  };


  // value={username}  it will store value which is given by user
  // if username field value changed for that ===> onChange={(e) =>setUsername(e.target.value) }


  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e) =>setUsername(e.target.value) } placeholder="username" />
      {" "}
      <input type="text" value={password} onChange={(e) =>setPassword(e.target.value) } placeholder="password" />
      {" "}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;


/*

    For Data send that means data post

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password})
    };


*/