import { Menu } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function DropdownItem() {
    return (
        <Menu.Item>
            {({ active }) => (
                <div
                className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                    test1
                </div>
            )}
        </Menu.Item>
    );
}

export default DropdownItem;