import React, { useContext } from "react";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";

function Login(){

    const {authenticated}: any = useContext(MyContext);
    const {setAuthenticated} : any = useContext(MyContext);
    
    const navigate = useNavigate();
    const RediRectToHome = () => {
        navigate("/");
    }
    

    return(
        <>
        <button onClick={() => {setAuthenticated(!authenticated)
        RediRectToHome()}}>Login</button>
        </>
    )
}

export default Login;