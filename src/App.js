import React from "react";
import Register from "./pages/register/index.js";
import Header from "./Components/Global/Header/index.js";
import "./styles/global.css";
const App = () => {

  return (
    <div id = 'container'>
      <Header></Header>
        <Register></Register>
      
    </div>
  )
}


export default App;
