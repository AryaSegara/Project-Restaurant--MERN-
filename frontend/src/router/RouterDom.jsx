import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import "../App.css"

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
          
        }
      ]
    },
  ]);


export default router;