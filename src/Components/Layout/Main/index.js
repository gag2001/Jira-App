import Header from "../../Global/Header/index.js";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Header/>
            <Outlet/>
        </div>
    )
};

export default MainLayout;