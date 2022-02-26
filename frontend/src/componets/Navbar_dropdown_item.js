import { Menu } from '@headlessui/react';
import { Link } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function DropdownItem() {
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
                    >
                        Logout
                    </div>
                )}
            </Menu.Item>
        </>
    );
}

export default DropdownItem;