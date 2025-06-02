/* eslint-disable react/prop-types */
import { Children, createContext } from "react";


export const AuthContext = createContext();

const AuthProvider = ({children}) =>{

    const authInfo ={

    }
    return(
       <AuthContext.Provider value={authInfo}>
        {Children}
       </AuthContext.Provider>
    )
}

export default AuthProvider;