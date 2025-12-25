import {  createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import ErrorPage from "./components/ErrorPage"


const App = () => {
    
    const routes = createBrowserRouter([
      {
         path:"/",
         element:<Home/>,
         errorElement:<ErrorPage/>,
         children:[
          {
         path:"/about",
         element:<About/>
       },
      {
          path:"/contact",
          element:<Contact/>
      }]
      }
    ])

   

  return (
    <>
     <RouterProvider router={routes}  /> 
    </>
  )
}

export default App
