import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import DropdownItem from './Navbar_dropdown_item';

function Dropdown() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-xl text-gray-700" >
                    <span className="m-1 pr-1"><CgProfile /></span>
                    Profile
                    <span className="m-1"><IoIosArrowDown /></span>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >

                <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <DropdownItem />
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

export default Dropdown;