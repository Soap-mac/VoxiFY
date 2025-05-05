import React from "react";
import { Outlet, useLocation } from "react-router-dom"
import Header from "./components/Header/Header";
import Body from "./components/LandingPage/Body";
import Footer from "./components/Footer/Footer";
import DashHeader from "./components/Dashboard/Header/DashHeader";


function Layout() {

    const location = useLocation();

    const noheaderandfooter = ['/user/Login', '/user/Register']
    const NoheaderDash = ['/Dashboard', '/Dashboard/Voxify']
    const noheader = noheaderandfooter.includes(location.pathname)
    const noheadDash = NoheaderDash.includes(location.pathname)

    return (
        <div>
            {!noheader && !noheadDash && <Header />}
            {noheadDash && <DashHeader />}
            <Outlet />
            {!noheader && !noheadDash && <Footer />}
        </div>
    )
}

export default Layout