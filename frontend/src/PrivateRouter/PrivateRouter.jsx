/* eslint-disable react/prop-types */
import {useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const PrivateRouter = ({children}) =>{

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return(
            // <LoadingSpinner />
            <div>halo</div>
        )
    }
    if(user){
        return children;
    }
    return(
        <Navigate to="/signup" state={{from : location}} replace></Navigate>
    )
}

export default PrivateRouter;