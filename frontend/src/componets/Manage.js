import Sidebar from "./Manage_sidebar";
import ManageTable from "./Manage_table";

function Manage() {
    return (
        <div className="relative min-h-screen flex">
            <Sidebar /> 
            <div className="flex-1 p-3 ">
                <ManageTable />
            </div>
        </div>
    );
}

export default Manage;