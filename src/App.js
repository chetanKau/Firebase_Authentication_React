
import { useState } from 'react';
import './App.css';
import app from './firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const auth= getAuth();

 async function handleSubmit() {
    const result=await createUserWithEmailAndPassword(auth,email,password);
    console.log(result)
  }
  return (
    <div className="App">
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default App;
