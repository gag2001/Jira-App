import AuthProfileDropDown from "../../Shared/AuthProfileDropDown/index.js";
import "./index.css";
import { Flex, Button } from "antd";

const Header = () => {
  return (
    <div className = "main-header">
        <Flex justify="space-between" align="center">
            <p>Left</p>
            <div>
            <AuthProfileDropDown/>
            </div>
        </Flex>
    </div>
  )
};



export default Header;