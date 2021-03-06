import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Session from "../data/Data";
import Item from "./Manage_item";
import Sidebar from "./Manage_sidebar";

function ManageItem() {
    const { userID } = useContext(Session)
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/apiitem/user/'+ userID)
        .then( response => {
            setItems(response.data)
        })
    }, [])

    return (
        <div className="relative min-h-screen flex">
            <Sidebar /> 
            <div className="flex-1 p-3">
                <div className="grid grid-cols-4 gap-4">
                    {items.filter(data => data.show == "show").map((data, index) => (
                        <Item item={data} key={index} /> 
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ManageItem;