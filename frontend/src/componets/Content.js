import Item from "./Content_item";
import axios from "axios";
import { useEffect, useState } from "react";

function Content() {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api')
        .then( response => {
            setItems(response.data)
        })
    }, [])

    return (
        <div className='max-w-7xl mx-auto px-4 py-4'>
            <div className="grid grid-cols-4 gap-4">
                {items.map((data, index) => (
                    <Item item={data} key={index} /> 
                ))}
            </div>
        </div>
        
    );
}

export default Content;