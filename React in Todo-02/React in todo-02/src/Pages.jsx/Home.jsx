import { collection, addDoc } from "firebase/firestore"; 
import React, { useEffect, useRef, useState } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore  } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDaZNOKgzvJzejKg_TMud16EJlj7vCz8xI",
  authDomain: "react-todo-app-02.firebaseapp.com",
  projectId: "react-todo-app-02",
  storageBucket: "react-todo-app-02.appspot.com",
  messagingSenderId: "520128044734",
  appId: "1:520128044734:web:73df78d7d7220bbb4088ef",
  measurementId: "G-7276PWKPSC"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig); 
 const auth = getAuth(app);
 const db = getFirestore(app);







const Home = () => {

let [todo,setTodo] =  useState([]);

const inputValue = useRef();

async function  addTodo(event){
  event.preventDefault();
  console.log(todo);
  
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      todo:inputValue.current.value
    });
    todo.push({todo:inputValue.current.value,id:docRef.id});
    setTodo([...todo]);
    console.log("Document written with ID: ", docRef.id);
  inputValue.current.value = ''
} catch (e) {
  console.error("Error adding document: ", e);
}
}


async function editfunction(index){
  const newValue = prompt('Enter new value');
  todo[index].todo = newValue;
  // todo.splice(index , 1 , newValue);
  setTodo([...todo]);

const washingtonRef = doc(db, "todos", todo[index].id);

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, {
  todo: newValue,
  id:todo[index].id
});
}

async function deleteFunction(index){
  console.log(todo[index].id);
  
  await deleteDoc( doc(db, 'todos', todo[index].id));
  
  // Remove the 'capital' field from the document
  
  todo.splice(index,1);
  setTodo([...todo]);

}

useEffect(()=>{

  
 async function getDatafrom(){



const querySnapshot = await getDocs(collection(db, "todos"));
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
  todo.push({id:doc.id,...doc.data()})
  setTodo([...todo])
});
  }

  getDatafrom()

} , [])




  return (
 <>
  <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center mb-4">To-Do App</h2>
      <form className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Enter your task"
          className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          ref={inputValue}
          required
        />
        <button
          type="submit"
          className="flex items-center bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={addTodo}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a1 1 0 011 1v7h7a1 1 0 110 2h-7v7a1 1 0 11-2 0v-7H3a1 1 0 110-2h7V3a1 1 0 011-1z" />
          </svg>
          Add
        </button>
      </form>

      <ul className="mt-4">
        {todo.length > 0 ? todo.map((item,index)=>{
          return <div key={index}>
<li className="border-b py-2 flex justify-between">{item.todo} 
  <div className='flex gap-2'>
  <button className="flex items-center bg-yellow-500 text-white rounded-md px-4 py-2 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300" onClick={()=> editfunction(index)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.414 2.586a2 2 0 00-2.828 0L14 3.586l3.414 3.414 0-1.414a2 2 0 000-2.828zM4 14.414l7.414-7.414 3.414 3.414L7.414 17H4v-2.586z" />
        </svg>
        Edit
      </button>
      <button className="flex items-center bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300" onClick={() => deleteFunction(index)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 3a1 1 0 00-1 1v2a1 1 0 01-1 1H5a1 1 0 00-1 1v2a1 1 0 01-1 1h1a1 1 0 001 1h3a1 1 0 011-1h2a1 1 0 011-1h2a1 1 0 011-1h-1a1 1 0 00-1-1h-2a1 1 0 01-1-1V4a1 1 0 00-1-1H10z" />
        </svg>
        Delete
      </button></div></li>
          </div>
        }): <h1>No Todo</h1>}
        
        
      </ul>
    </div>
 </>
  )
}

export default Home
