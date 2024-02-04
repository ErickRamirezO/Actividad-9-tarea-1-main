import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut , signInWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log(auth?.currentUser?.email);
  console.log(auth?.currentUser?.photoURL);

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  function handleLogin(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log("Datos", email, password);
    signInWithEmailAndPassword(auth, email,password);
  }

  return (
    <div className="container mt-5 conteiner1">
      <h1>BIENVENIDO</h1><br />
      <div className="mb-3">
        <input id="email" className="form-control" placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-3">
        <input id="password"
          className="form-control"
          type="password"
          placeholder="Password.."
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-success mb-2" onClick={handleLogin}>Ingresar</button>
      <br></br>
      <button className="btn btn-primary mb-2" onClick={signInWithGoogle}>
        Ingresar con Google
      </button>
      <p><a className="text-black"href="/registro">¿No tiene cuenta? Registrate </a>
      </p>
    </div>
  );
};
