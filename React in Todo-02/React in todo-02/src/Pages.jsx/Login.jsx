import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Config';

const LoginPage = () => {
  


  
  const  email = useRef()
  const  password = useRef()
  const navigate = useNavigate()


  function loginFunction(event){
event.preventDefault()
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      
      
      const user = userCredential.user;
    navigate(`/home`)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
  });
  
}


  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center">Login</h2>
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                ref={email}
                placeholder="your-email@example.com"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
               ref={password}
                placeholder="********"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary" onClick={loginFunction}>
                <Link to="home">Login</Link>
              </button>
              
              <button> <Link to="signup">not  a user  ? Register</Link></button>
            </div>
          </form>
          <div className="mt-4 text-center">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

