import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import UserContext from "../context/user.context"
import { useEffect, useState } from "react"


const Home = () => {
  const [username,setUserName] = useState("")
  const [loggedIn,setLoggedIn] = useState(false)
     useEffect(()=> {
        // code for auth (api calling)
        const data = {
          name:"raghav",
          login:true
        } 
        setUserName(data.name)
        setLoggedIn(true)

     },[])



  return (
    <div>
      <UserContext.Provider value={{loggedInUser:username,isLoggedIn:loggedIn}}>
      <Header/>
      <Outlet/>
      </UserContext.Provider>
    </div>
  )
}

export default Home
