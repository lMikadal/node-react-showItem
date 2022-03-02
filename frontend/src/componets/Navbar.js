import Dropdown from "./Navbar_dropdown";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Session from "../data/Data";

function Navbar() {
    const { login } = useContext(Session)

    return (
        <nav className="bg-orange-500">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/">
                        <div className="flex-shrink-0">
                            <h1 className="text-white text-2xl px-3 py-2 rounded-md">LOGO</h1>
                        </div>
                    </Link>
                    {login ? (
                        <div>                         
                            <Dropdown/>
                        </div>
                    ) : (
                        <div className="px-4 py-2 text-xl text-gray-700">
                            <Link to="/login">Login</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>    
    );
}

export default Navbar;