import React, { FC } from 'react';
import NavLink from './navlink';

interface Link {
  path: string;
  title: string;
}

interface MenuOverlayProps {
  links: Link[];
}

const MenuOverlay: FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;