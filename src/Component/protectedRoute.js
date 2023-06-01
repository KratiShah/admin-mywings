import { useDispatch } from "react-redux";
import { setAdmin } from "../redux-config/adminSlice";
import { Navigate } from "react-router-dom";

function ProtectedRoute ({children}){
    const isLoggedIn = window.localStorage.getItem("isLoggedIn");
    const dispatch = useDispatch();
    try {
           console.log("inside protect rouere")
    dispatch(setAdmin(JSON.parse(localStorage.getItem("isLoggedIn"))));
    console.log("inside protect rouere")
    
    if(!isLoggedIn)
        return <Navigate to="/signIn" replace/>
    return children;
    } catch (error) {
        console.log(error)
    }
}

export default ProtectedRoute;