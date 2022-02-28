import Sidebar from "./Manage_sidebar";
import ManageTable from "./Manage_table";
import { useState } from "react";
import axios from "axios";
import Input from "@material-tailwind/react/Input";
import Textarea from "@material-tailwind/react/Textarea";

function Manage() {

    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

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
        setName('')
        setDescription('')
        setPrice(0)
        setShowModal(false)  
    }

    const saveItem = e => {
        e.preventDefault()
        
        const json = JSON.stringify({
            name: name,
            description: description,
            price: Number(price)
        });

        axios.post('http://localhost:5000/api/insert', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        setName('')
        setDescription('')
        setPrice(0)
        setShowModal(false)   
        window.location.reload(false)   
    }
    
    return (
        <div className="relative min-h-screen flex">
            <Sidebar /> 
            <div className="flex-1 p-3 ">
                <h1 className="text-xl font-bold mb-4">Manage Item</h1>

                <button className="bg-emerald-500 text-white font-bold p-2 mb-4 rounded shadow hover:shadow-lg" type="button" onClick={() => setShowModal(true)}>Add Item</button>
                
                <ManageTable />
                
                {showModal ? (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-3/5 my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Form Add Item
                                        </h3>
                                    </div>
                                    <form onSubmit={saveItem}>
                                        {/*body*/}
                                        <div className="relative p-6 flex-auto">
                                            <label className="text-xl font-semibold my-2">
                                                Name
                                            </label>
                                            <Input
                                                type="text"
                                                color="blue"
                                                size="regular"
                                                outline={true}
                                                placeholder="name"
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
            </div>
        </div>
    );
}

export default Manage;