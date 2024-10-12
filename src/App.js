import React from "react";
import Register from "./pages/register/index.js";
import "./styles/global.css";
import Login from "./pages/login/index.js";
import { RouterProvider , createBrowserRouter,  createRoutesFromElements, Route } from 'react-router-dom';
import MainLayout from "./Components/Layout/Main/index.js";
import { ROUTE_CONSTANTS } from "./core/utils/constants.js";

const App = () => {

  return (
    <RouterProvider 
    
    router={
      createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element ={<MainLayout/>}>
            <Route path={ROUTE_CONSTANTS.LOGIN} element = {<Login/>}/>
            <Route path={ROUTE_CONSTANTS.REGISTER} element = {<Register/>}/>
          </Route>,

      
        )
      )
    }
    
    />
       

   
  )
};


export default App;
