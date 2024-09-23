import React, { useRef } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Config";


const SignUpPage = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate()
  
  function signup(event) {
    event.preventDefault();
    
    
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      
     
        const user = userCredential.user;
       navigate(`/`);
      
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        
      });
    
   
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center">Sign Up</h2>
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                // ref={username}
                placeholder="Your username"
                className="input input-bordered"
                required
              />
            </div>
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
              <button
                type="submit"
                className="btn btn-primary"
                onClick={signup}
              >
               <Link to="/">sigh in</Link>
               
              </button>
              <button> <Link to="/">Already a user  ? log in</Link></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
