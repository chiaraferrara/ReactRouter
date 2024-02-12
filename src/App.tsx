import React, { createContext, useState } from "react";
import Login from "./components/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import './App.css'

export const MyContext = createContext({});

function App() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  //funzione che verifichi se siamo autenticati, se non siamo autenticati non mostrerà la Home
  function ProtectedRoute({ authenticated }: any) {
    if (authenticated == false) {
      return <Navigate to="/login" replace />;
    } else {
      return <Home />;
    }
  }

  return (
    <MyContext.Provider
      value={{
        authenticated,
        setAuthenticated,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route
            element={<ProtectedRoute authenticated={authenticated == true} />}
          >
            <Route path="/" Component={Home} />
          </Route>
          <Route path="/post/:id" Component={Post} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
