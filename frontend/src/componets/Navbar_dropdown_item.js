import { Menu } from '@headlessui/react';
import { Link } from "react-router-dom";
import { useContext } from "react";
import Session from "../data/Data";
import axios from "axios";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function DropdownItem() {
    const { userID } = useContext(Session)

    const logout = () => {
        const json = JSON.stringify({
            status: 0
        });
        
        axios.put('http://localhost:5000/apiuser/logout/'+ userID, json, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        window.location.href = "/";
    }

    return (
        <>
            <Menu.Item>
                {({ active }) => (
                    <Link 
                    to="/manage"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                        จัดการระบบ
                    </Link>
                )}
            </Menu.Item>

            <div className='px-2'>
                <hr/>
            </div>
            
            <Menu.Item>
                {({ active }) => (
                    <div
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    onClick={logout}
                    >
                        Logout
                    </div>
                )}
            </Menu.Item>
        </>
    );
}

export default DropdownItem;