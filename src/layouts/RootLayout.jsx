
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import {Outlet} from "react-router-dom";

export function RootLayout() {
    return (
        <div className='flex flex-col min-h-screen'>

            <NavBar />
            <div className='flex-grow'>
            <Outlet className="w-full" />
            </div>
           

            <Footer />

        </div>
    )
}