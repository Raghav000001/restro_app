import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";
import ErrorPage from "./components/ErrorPage";
import ResInfo from "./components/ResInfo";
import { lazy,Suspense } from "react";
import Shimmer from "./components/Shimmer";
import Cart from "./components/Cart";

const About = lazy(()=> import("./components/About"));
// on-demand import
// dynamic importing
// code splitting
// code chunking



const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element:<Suspense fallback={<Shimmer/>}> <About /> </Suspense>,
        },
        {
          path: "/contact",
          element: <Contact />,
        },{
           path:"/menu/:id",
           element:<ResInfo/>
        },{
          path:"/cart",
          element:<Cart/>
        }
      ],
    },
  ]);



  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
