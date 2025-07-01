import React from "react";
import {Outlet} from 'react-router-dom'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ThemeContextProvider from "../../Context/ThemeContextProvider";

function Layout(){
    return(
      
        <>
        <ThemeContextProvider>
            <Header/>
            <main className="pt-20 bg-white dark:bg-gray-900">
                <Outlet />
                </main>

            <Footer/>
        </ThemeContextProvider>
        </>
       
    )
}
export default Layout