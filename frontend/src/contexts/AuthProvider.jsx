/* eslint-disable react/prop-types */
import { createContext } from "react";


export const AuthContext = createContext();

const AuthProvider = ({children}) =>{
    return(
        <div>AuthPrivider</div>
    )
}

export default AuthProvider;