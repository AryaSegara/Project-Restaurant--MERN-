import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import "../App.css"
import Menu from "../pages/shop/Menu";
import SignUp from "../components/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
          path:"/",
          element:<Home />,
        },
        {
           path:"/menu",
           element: <Menu />,
        },
      ]
    },
    {
      path: "/signup",
      element:<SignUp />,
    }
  ]);


export default router;