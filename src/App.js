import  {useEffect,useState } from "react";
import "./styles/global.css";
import {Register,Login} from './pages/auth/index.js'
import { RouterProvider , createBrowserRouter,  createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import Cabinet from "./pages/cabinet/index.js";
import MainLayout from "./Components/Layout/Main/index.js";
import LoadingWrapper from "./Components/Shared/LoadingWrapper/index.js";
import {auth} from "./Services/Firebase/index.js"; 
import { ROUTE_CONSTANTS } from "./core/utils/constants.js";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  const [isAuth,setIsAuth] = useState(false);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>setIsAuth(Boolean(user)))
    setLoading(false);
    
  })


  return (
    <LoadingWrapper loading={loading}>
    <RouterProvider 
    
    router={
      createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element ={<MainLayout/>}>
            <Route path={ROUTE_CONSTANTS.LOGIN} element = { isAuth ? <Navigate to={ROUTE_CONSTANTS.CABINET}/> : <Login setIsAuth = {setIsAuth}/>}/>
            <Route path={ROUTE_CONSTANTS.REGISTER} element = {isAuth ? <Navigate to={ROUTE_CONSTANTS.CABINET}/> : <Register/>}/>
            <Route path={ROUTE_CONSTANTS.CABINET} element = {isAuth ? <Cabinet/> : <Navigate to={ROUTE_CONSTANTS.LOGIN}/>}/>
          </Route>,

      
        )
      )
    }
    
    />
       
       </LoadingWrapper>
   
  )
};


export default App;
