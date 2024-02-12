import React, { createContext, useState } from "react";
import Login from "./components/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";

export const MyContext = createContext({});

function App() {
  const [authenticated, setAuthenticated] = useState(false);

//funzione che verifichi se siamo autenticati, se non siamo autenticati non mostrerà la Home
function ProtectedRoute({authenticated}: any){
  if(authenticated){
    return <Navigate to="/"/>;
  } else{
      return <Login/>
  }

}



  return (
    <BrowserRouter>
   
      <MyContext.Provider
        value={{
          authenticated,
          setAuthenticated: () => setAuthenticated(true),
        }}
      > <Routes> 
        <Route element={<ProtectedRoute authenticated={authenticated}/>}>
        <Route path="/login" element={<Login/>}/>
       
        <Route path="/" element={<Home/>}/>
        <Route path="/post/:id" element={<Post/>}/>
        </Route>
        </Routes>

      </MyContext.Provider>
      
    </BrowserRouter>
  );
}

export default App;
