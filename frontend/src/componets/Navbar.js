import Dropdown from "./Navbar_dropdown";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-orange-500">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/">
                        <div className="flex-shrink-0">
                            <h1 className="text-white text-2xl px-3 py-2 rounded-md">LOGO</h1>
                        </div>
                    </Link>
                    <div>
                        <Dropdown/>
                    </div>
                </div>
            </div>
        </nav>    
    );
}

export default Navbar;