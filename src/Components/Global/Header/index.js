import "./index.css";
import { Flex, Button } from "antd";

const Header = () => {
  return (
    <div className = "main-header">
        <Flex justify="space-between" align="center">
            <p>Left</p>
            <div>
            <Button>Sign in</Button>
            </div>
        </Flex>
    </div>
  )
};


export default Header;