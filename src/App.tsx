import React, { createContext, useState } from "react";
import Login from "./components/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";

export const MyContext = createContext({});

function App() {
  const [authenticated, setAuthenticated] = useState(false);

//funzione che verifichi se siamo autenticati, se non siamo autenticati non mostrerà la Home
// function ProtectedRoute({authenticated}: any){
//   if(authenticated == true){
//     return <Navigate to="/"/>;
//   } else{
//       return <Navigate to="/login"/>;
//   }

// }

  return (
    <BrowserRouter>
   
      <MyContext.Provider
        value={{
          authenticated,
          setAuthenticated: () => setAuthenticated(true),
        }}
      > <Routes> 
        
        <Route path="/login" element={<Login/>}/>
       <Route path="/" element={<Home/>}/>
        <Route path="/post/:id" element={<Post/>}/>
        
        </Routes>
      </MyContext.Provider>
      
    </BrowserRouter>
  );
}

export default App;
