import React from 'react'
import { useRouteError , useNavigate } from 'react-router-dom'


const ErrorPage = () => {


   const navigate = useNavigate();
   const error = useRouteError();
   //    console.log(error);
   

  return (
    <div>
      <h1>{error.data}</h1>
      <h2>{error.error.message}</h2>
      <p>{error.status}</p>
  
      <button onClick={()=> {
          navigate("/")
      }}>
          visit home page
      </button>
        
    </div>
  )
}

export default ErrorPage;
