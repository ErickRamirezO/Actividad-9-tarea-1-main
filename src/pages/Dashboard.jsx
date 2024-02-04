// RegistrationForm.jsx
import { auth} from "../config/firebase";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut  } from 'firebase/auth';

const Registration = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2></h2>

      <button className="btn btn-danger mb-2" onClick={logOut}>Salir</button>
    </div>
  );
};

export default Registration;
