import React, { useContext, useEffect } from "react";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";

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
      <button
        onClick={() => {
          setAuthenticated(true);
          console.log(authenticated);
        }}
      >
        Login
      </button>
    </>
  );
}

export default Login;
