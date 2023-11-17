import React, { FC } from 'react';
import NavLink from './navlink';

interface Link {
  name: string;
  href: string;
}

interface MenuOverlayProps {
  links: Link[];
}

const MenuOverlay: FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.name} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;