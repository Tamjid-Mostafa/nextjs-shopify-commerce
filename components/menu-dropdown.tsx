// MenuDropdown.tsx
'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';

interface MenuDropdownProps {
  title: string;
  path: string;
  items?: { title: string; path: string }[];
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({ title = '', path = '', items }) => {
  return (
    <Menu title={title} as="div">
      <MenuButton className="inline-flex items-center gap-2 text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-neutral-300">
        {title}
        <ChevronDownIcon className="size-4 fill-white/60" />
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="w-52 origin-top-right rounded-xl border border-white/60 bg-black/70 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 backdrop-blur-lg"
      >
        {items?.map((subItem) => (
          <MenuItem key={subItem.title}>
            <Link
              href={subItem.path}
              className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
            >
              {subItem.title}
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default MenuDropdown;