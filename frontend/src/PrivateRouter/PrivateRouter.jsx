import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useLocation } from "react-router-dom";

const PrivateRouter = () =>{

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    return(
        <div>PrivateRouter</div>
    )
}

export default PrivateRouter;