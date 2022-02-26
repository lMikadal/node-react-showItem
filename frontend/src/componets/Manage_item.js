import Item from "./Content_item";
import Sidebar from "./Manage_sidebar";

function ManageItem() {
    return (
        <div className="relative min-h-screen flex">
            <Sidebar /> 
            <div className="flex-1 p-3">
                <div className="grid grid-cols-4 gap-4">
                    <Item />
                </div>
            </div>
        </div>
    );
}

export default ManageItem;