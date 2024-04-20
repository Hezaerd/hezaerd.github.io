import React, { FC } from "react";
import Link from "next/link";

interface NavLinkProps {
    name: string;
    href: string;
}

const NavLink: FC<NavLinkProps> = ({ href, name }) => {
    return (
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:bg-transparent md:p-0 hover:text-white"
            aria-current="page"
        >
            {name}
        </Link>
    );
};

export default NavLink;