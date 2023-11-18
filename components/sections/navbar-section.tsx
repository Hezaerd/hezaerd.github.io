import React, {useState} from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import NavLink from "../nav/nav-link";
import MenuOverlay from "../menu/menu-overlay";

const navigation = [
    { name: 'About', href: '#'},
    { name: 'Portfolio', href: '#'},
    { name: 'Contact', href: "#"},
];

export default function Navbar_Section() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto p-8">
                <Link
                    href="/"
                    className="text-2xl md:text-5xl text-white font-semibold"
                >
                </Link>
                <div className="block md:hidden">
                    {!isOpen ? (
                        <button
                            id="nav-toggle"
                            className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
                            onClick={() => setIsOpen(true)}
                        >
                            <Bars3Icon className="h-3 w-3" />
                        </button>
                        ) : (
                        <button
                            id="nav-toggle"
                            className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
                            onClick={() => setIsOpen(false)}
                        >
                        <XMarkIcon className="h-5 w-5" />
                        </button>
                        )}
                </div>
                <div className="hidden md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex p-4 md:p-0  rounded-lg flex-row md:space-x-8 mt-0">
                        {navigation.map((item) => {
                            return (
                                <li>
                                    <NavLink
                                        key={item.name}
                                        title={item.name}
                                        href={item.href}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            {isOpen ? <MenuOverlay links={navigation} /> : null}
        </nav>
    );
}