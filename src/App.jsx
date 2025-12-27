import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";
import ErrorPage from "./components/ErrorPage";
import ResInfo from "./components/ResInfo";

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
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },{
           path:"/menu/:id",
           element:<ResInfo/>
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
