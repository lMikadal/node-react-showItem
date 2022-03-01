import Input from "@material-tailwind/react/Input";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login(props) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState(0);
    
    const inputUserName = e => {
        setUserName(e.target.value)
    }

    const inputPassword = e => {
        setPassword(e.target.value)
    }

    const login = e => {
        e.preventDefault()
        
        const json = JSON.stringify({
            status: 1
        });
        
        axios.put('http://localhost:5000/apiuser/login/'+ userName + '/' + password, json, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        setUserName('')
        setPassword(0)
        window.location.href = "/";
    }

    return (
        <>
            <div className="relative w-2/5 my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Login
                        </h3>
                    </div>
                    <form onSubmit={login}>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <label className="text-xl font-semibold my-2">
                                User name
                            </label>
                            <Input
                                type="text"
                                color="blue"
                                size="regular"
                                outline={true}
                                placeholder="user name"
                                onChange={inputUserName}
                            />
                            <h3 className="text-xl font-semibold my-2">
                                Password
                            </h3>
                            <Input
                                type="text"
                                color="blue"
                                size="regular"
                                outline={true}
                                placeholder="password"
                                onChange={inputPassword}
                            />
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-center p-6 border-solid border-blueGray-200 rounded-b">
                            <button
                                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg w-96"
                                type="submit"
                            >
                                Login 
                            </button>
                        </div>
                    </form>
                    <div className="px-6 pb-4 flex items-center justify-center text-gray-700">
                        <p>New User?</p>&nbsp;&nbsp;&nbsp;
                        <Link to="/register">
                            <p className="hover:font-semibold">Sign up</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;