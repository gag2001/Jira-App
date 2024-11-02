import  { useEffect,useState } from "react";
import "./styles/global.css";
import { Register,Login } from './pages/auth/index.js';
import  Profile  from './pages/Profile/index.js';
import { getDoc,doc } from "firebase/firestore";
import { RouterProvider , createBrowserRouter,  createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import Cabinet from "./pages/cabinet/index.js";
import CabinetLayout from "./Components/Layout/Cabinet/index.js";
import MainLayout from "./Components/Layout/Main/index.js";
import LoadingWrapper from "./Components/Shared/LoadingWrapper/index.js";
import { auth,db } from "./Services/Firebase/index.js"; 
import { FIRESTORE_PATH_NAMES, ROUTE_CONSTANTS } from "./core/utils/constants.js";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "./Context/authContext.js";

const App = () => {
  const [isAuth,setIsAuth] = useState(false);
  const [loading,setLoading] = useState(true);
  const [userProfileInfo,setUserProfileInfo] = useState({});

  const handleGetUserData = async (uid) => {
    const docRef = doc(db, FIRESTORE_PATH_NAMES.REGISTERED_USERS,uid);
    const response =  await getDoc(docRef);
    if(response.exists()){
       setUserProfileInfo(response.data());

       
    }
  }

  useEffect(()=>{
   
    onAuthStateChanged(auth,(user)=> {
         
         
           user?.uid && handleGetUserData(user.uid);
          setLoading(false); 
          setIsAuth(Boolean(user));

    },[]);
    
    
  });

  return (
    <AuthContext.Provider value={{ isAuth, userProfileInfo }}>
    <LoadingWrapper loading={loading}>
    <RouterProvider 
      router={
      createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element ={<MainLayout/>}>
            <Route path={ROUTE_CONSTANTS.LOGIN} element = { isAuth ? <Navigate to={ROUTE_CONSTANTS.CABINET}/> : <Login setIsAuth = {setIsAuth}/>}/>
            <Route path={ROUTE_CONSTANTS.REGISTER} element = {isAuth ? <Navigate to={ROUTE_CONSTANTS.CABINET}/> : <Register/>}/>

            {/*Cabinet Layout Route*/}
            <Route path={ROUTE_CONSTANTS.CABINET} element = {isAuth ? <CabinetLayout/> : <Navigate to= {ROUTE_CONSTANTS.LOGIN}/>}>

            
                     <Route path={ROUTE_CONSTANTS.PROFILE} element = {<Profile/>}/>

            </Route>
            
          
          </Route>,

      
        )
      )
    }
    
    />
       
       </LoadingWrapper>
       </AuthContext.Provider>
  )
};


export default App;

