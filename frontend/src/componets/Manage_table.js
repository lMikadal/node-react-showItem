import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Input from "@material-tailwind/react/Input";
import Textarea from "@material-tailwind/react/Textarea";
import Session from "../data/Data";

function ManageTable() {
    const { userID } = useContext(Session)
    const [showModal, setShowModal] = useState(false)
    const [items, setItems] = useState([])
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:5000/apiitem/user/'+ userID)
        .then( response => {
            setItems(response.data)
        })
    }, [])

    function showModalEdit(data) {
        axios.get('http://localhost:5000/apiitem/edit/'+ data)
        .then( response => {
            setId(response.data._id)
            setName(response.data.name)
            setDescription(response.data.description)
            setPrice(response.data.price)
        })
        setShowModal(true)
    }

    function deleteItem(data) {
        axios.delete('http://localhost:5000/apiitem/delete/'+ data)
        
        window.location.reload(false)
    }

    function switchShow(id, sh) {
        const json = (sh === "show") ? (
            JSON.stringify({
                show: "off"
            })
        ) : (    
            JSON.stringify({
                show: "show"
            })
        )        

        axios.put('http://localhost:5000/apiitem/updatashow/'+ id, json, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.reload(false)
    }

    const inputName = e => {
        setName(e.target.value)
    }

    const inputDescription = e => {
        setDescription(e.target.value)
    }

    const inputPrice = e => {
        setPrice(e.target.value)
    }

    const colseMoadal = () => {
        setId('')
        setName('')
        setDescription('')
        setPrice(0)
        setShowModal(false)  
    }

    const editItem = e => {
        e.preventDefault()
        
        const json = JSON.stringify({
            name: name,
            description: description,
            price: Number(price)
        });

        axios.put('http://localhost:5000/apiitem/updata/'+ id, json, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        setName('')
        setId('')
        setDescription('')
        setPrice(0)
        setShowModal(false)  
        
        window.location.reload(false)
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            description
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            price
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Show
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Edit
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {items.map((item) => (
                                        <tr key={item._id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{item.description}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{item.price}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="bg-blue-400 p-2 font-bold mb-4 rounded shadow hover:shadow-lg" onClick={() => switchShow(item._id, item.show)}>{item.show}</button>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="bg-yellow-400 font-bold p-2 mb-4 rounded shadow hover:shadow-lg " type="button" onClick={() => showModalEdit(item._id)}>Edit Item</button>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="bg-red-400 p-2 font-bold mb-4 rounded shadow hover:shadow-lg" onClick={() => deleteItem(item._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
               
            </div>
            
            {showModal ? (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-3/5 my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Form Edit Item
                                        </h3>
                                    </div>
                                    <form onSubmit={editItem}>
                                        {/*body*/}
                                        <div className="relative p-6 flex-auto">
                                            <input type="hidden" value={id}/>
                                            <h3 className="text-xl font-semibold my-2">
                                                Name
                                            </h3>
                                            <Input
                                                type="text"
                                                color="blue"
                                                size="regular"
                                                outline={true}
                                                placeholder="name"
                                                value={name}
                                                onChange={inputName}
                                            />
                                            <h3 className="text-xl font-semibold my-2">
                                                Description
                                            </h3>
                                            <Textarea
                                                color="lightBlue"
                                                size="blue"
                                                outline={true}
                                                placeholder="description"
                                                value={description}
                                                onChange={inputDescription}
                                            />
                                            <h3 className="text-xl font-semibold my-2">
                                                Price
                                            </h3>
                                            <Input
                                                type="text"
                                                color="blue"
                                                size="regular"
                                                outline={true}
                                                placeholder="price"
                                                value={price}
                                                onChange={inputPrice}
                                            />
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={colseMoadal}
                                            >
                                                Close
                                            </button>
                                            <button
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="submit"
                                            >
                                                Save 
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
        </>
    );
}

export default ManageTable