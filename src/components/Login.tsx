import React, { useContext, useEffect } from "react";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";
import { Button, Wrapper } from "../Style/Style";

function Login() {
  const { authenticated }: any = useContext(MyContext);
  const { setAuthenticated }: any = useContext(MyContext);

  useEffect(() => {
    if (authenticated) RediRectToHome();
  }, [authenticated]);

  const navigate = useNavigate();

  const RediRectToHome = () => {
    navigate("/");
  };

  return (
    <>
    
    <Wrapper>
        <h3>Login</h3>
       <div>
      <Button
        onClick={() => {
          setAuthenticated(true)
        }}
      >
        Login
      </Button></div>
      </Wrapper>
    </>
  );
}

export default Login;
