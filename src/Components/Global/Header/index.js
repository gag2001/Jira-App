import { useContext } from "react";
import { AuthContext } from "../../../Context/authContext.js";
import AuthProfileDropDown from "../../Shared/AuthProfileDropDown/index.js";
import "./index.css";
import { Flex, Button } from "antd";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../core/utils/constants.js";
const Header = () => {
  const {isAuth , userProfileInfo} = useContext(AuthContext);
  
  return (
    <div className = "main-header">
        <Flex justify="space-between" align="center">
            <p>Left</p>
            <div>
                 {
                  isAuth ? <AuthProfileDropDown userProfileInfo = {userProfileInfo}/> : <Link to={ROUTE_CONSTANTS.LOGIN}><Button>Sign in</Button></Link>
                 }
            </div>
        </Flex>
    </div>
  )
};



export default Header;