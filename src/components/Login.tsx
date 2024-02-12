import React, { useContext } from "react";
import { MyContext } from "../App";

function Login(){

    const {authenticated}: any = useContext(MyContext);
    const {setAuthenticated} : any = useContext(MyContext);
    
    
    return(
        <>
        <button onClick={() => {setAuthenticated(true)
        console.log(authenticated)}}>Login</button>
        </>
    )
}

export default Login;