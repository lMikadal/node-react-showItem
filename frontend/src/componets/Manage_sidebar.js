import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="bg-black opacity-80 text-white w-72 space-y-6 px-4 py-3 inset-y-0 left-0">
            <nav className="sticky top-0">
                <Link to="/manage">
                    <h1 className="block py-2 px-4 rounded-lg hover:bg-slate-700">Manage</h1>
                </Link>
                <Link to="/manage/item">
                    <h1 className="block py-2 px-4 rounded-lg hover:bg-slate-700">Item Me</h1>
                </Link>          
            </nav>
        </div>
    );
}

export default Sidebar;