
import { useState } from 'react';
import './App.css';
import app from './firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const auth = getAuth();

  async function handleSubmitSignup() {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      console.log(result)
      alert("Signup Successfull")
    } catch (error) {
      console.log(error)
      alert(error.message)
    }

  }

  async function handleSubmitSignIn() {
    try {
      const signIn = await signInWithEmailAndPassword(auth, email, password);
      console.log(signIn);
      alert("User Signed In")
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }
  return (
    <div className="App" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space_evenly", height: "100vh" }}>
      <div >


        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />

        <button type="submit" onClick={handleSubmitSignup} >SignUp</button>
      </div>
      <br />
      <div>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" onClick={handleSubmitSignIn}>SignIn</button>
      </div>
    </div>
  );
}

export default App;
