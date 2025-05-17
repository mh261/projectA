import { Fragment, useState } from 'react';
import {
    Dialog, DialogBackdrop, DialogPanel,
    Popover, PopoverButton, PopoverGroup, PopoverPanel,
    Transition,
} from '@headlessui/react';
import {
    Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon,
    XMarkIcon, PlusIcon, MinusIcon,
} from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import navigation from './navigation';

const slugify = (str) =>
    str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove accents
       .replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');

export default function Navigation() {
    const [open, setOpen] = useState(false);
    const [expandedCategories, setExpandedCategories] = useState({});
    const navigate = useNavigate();

    const toggleCategory = (categoryName) => {
        setExpandedCategories(prev => ({
            ...prev,
            [categoryName]: !prev[categoryName]
        }));
    };

    const buildPath = (a, b, c) => `/${slugify(a)}/${slugify(b)}/${slugify(c)}`;

    return (
        <div className="relative z-50 bg-white">
            {/* Mobile Navigation */}
            <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
                <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel className="relative w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-2xl rounded-r-2xl">
                        <div className="flex justify-between px-4 pt-5 pb-2">
                            <button onClick={() => setOpen(false)} className="p-2 text-gray-400 hover:bg-gray-100">
                                <XMarkIcon className="size-6" />
                            </button>
                        </div>

                        <div className="mt-4 space-y-4">
                            {navigation.categories.map(category => (
                                <div key={category.name} className="border-b border-gray-200 pb-2">
                                    <div className="flex justify-between px-4">
                                        <h2 className="font-semibold">{category.name}</h2>
                                        <button onClick={() => toggleCategory(category.name)} className="p-1 hover:bg-gray-100 rounded-full">
                                            {expandedCategories[category.name] ? <MinusIcon className="h-5 w-5" /> : <PlusIcon className="h-5 w-5" />}
                                        </button>
                                    </div>
                                    <Transition
                                        show={expandedCategories[category.name]}
                                        as={Fragment}
                                        enter="transition duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="transition duration-200"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <ul className="mt-2 px-4">
                                            {category.sections.map(section => (
                                                <li key={section.name}>
                                                    <p className="font-medium">{section.name}</p>
                                                    <ul className="mt-1 pl-4">
                                                        {section.items.map(item => (
                                                            <li key={item.name}>
                                                                <Link to={buildPath(category.name, section.name, item.name)} className="text-gray-600 hover:text-orange-400 block">
                                                                    {item.name}
                                                                </Link>
                                                                {item.children && (
                                                                    <ul className="ml-4 mt-1">
                                                                        {item.children.map(child => (
                                                                            <li key={child.name}>
                                                                                <Link to={buildPath(category.name, section.name, child.name)} className="text-gray-500 hover:text-orange-400 block text-sm">
                                                                                    {child.name}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            ))}
                                        </ul>
                                    </Transition>
                                </div>
                            ))}

                            <div className="px-4 pt-4">
                                {navigation.pages.map(page => (
                                    <div key={page.name}>
                                        <Link to={page.href} className="block text-base font-semibold text-gray-900 hover:text-orange-400">
                                            {page.name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            {/* Desktop Navigation */}
            <header className="fixed top-0 left-0 right-0 bg-white shadow-md">
                <p className="flex h-10 justify-center bg-orange-500 text-sm font-semibold text-white">
                    Miễn phí giao hàng cho đơn từ 300.000đ
                </p>
                <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-center border-b border-gray-200">
                        <button onClick={() => setOpen(true)} className="absolute left-4 p-2 text-gray-400 lg:hidden">
                            <Bars3Icon className="size-6" />
                        </button>

                        <PopoverGroup className="hidden lg:flex space-x-6">
                            {navigation.pages.map(page => (
                                <Link key={page.name} to={page.href} className="text-base font-semibold text-gray-700 hover:text-orange-400">
                                    {page.name}
                                </Link>
                            ))}

                            {navigation.categories.map(category => (
                                <Popover key={category.name} className="relative">
                                    {({ open }) => (
                                        <>
                                            <PopoverButton className={`text-base font-semibold ${open ? 'text-orange-400' : 'text-gray-700 hover:text-orange-400'}`}>
                                                {category.name}
                                            </PopoverButton>
                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter="transition duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <PopoverPanel className="absolute left-0 top-full mt-2 w-72 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                                                    <div className="py-2">
                                                        {category.sections.map(section => (
                                                            <div key={section.name} className="px-4 py-2">
                                                                {section.items.map(item => (
                                                                    <div key={item.name}>
                                                                        <Link to={buildPath(category.name, section.name, item.name)} className="block px-2 py-1 text-gray-700 hover:text-orange-500">
                                                                            {item.name}
                                                                        </Link>
                                                                        {item.children && (
                                                                            <div className="ml-4 mt-1">
                                                                                {item.children.map(child => (
                                                                                    <Link key={child.name} to={buildPath(category.name, section.name, child.name)} className="block px-2 py-1 text-sm text-gray-600 hover:text-orange-400">
                                                                                        {child.name}
                                                                                    </Link>
                                                                                ))}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </PopoverPanel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            ))}
                        </PopoverGroup>

                        <div className="absolute right-4 flex items-center space-x-4">
                            <Link to="#" className="text-gray-400 hover:text-orange-400">
                                <MagnifyingGlassIcon className="size-6" />
                            </Link>
                            <Link to="/cart" className="text-gray-700 hover:text-orange-400 flex items-center">
                                <ShoppingBagIcon className="size-6" />
                                <span className="ml-1 text-sm font-semibold">0</span>
                            </Link>
                            <Link to="/login" className="text-sm font-semibold text-gray-700 hover:text-orange-400 hidden lg:inline">
                                Đăng nhập
                            </Link>
                            <Link to="/register" className="text-sm font-semibold text-gray-700 hover:text-orange-400 hidden lg:inline">
                                Đăng ký
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
