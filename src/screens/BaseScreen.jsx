import { Outlet } from "react-router-dom";
import '../style/CustomeNav.css'
import CustomeNav from "../components/layouts/CustomeNav";

const BaseScreen = () =>{

    return(
        <>
            <CustomeNav/>
        <main className="container-fluid">
            <Outlet/>
        </main>

        </>
    );
};

export default BaseScreen;