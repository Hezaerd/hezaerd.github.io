import React, {useState} from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import NavLink from "@/src/components/nav/nav-link";
import MenuOverlay from "@/src/components/menu/menu-overlay";

const navigation = [
    { name: 'About', href: '#about'},
    { name: 'Portfolio', href: '#projects'},
    { name: 'Contact', href: "#contact"},
];

export default function Navbar_Section() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link
                    href="/public"
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
                                <li
                                    key={item.name}
                                >
                                    <NavLink
                                        key={item.name}
                                        name={item.name}
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