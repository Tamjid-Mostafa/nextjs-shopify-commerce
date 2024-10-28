'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Menu as MenuTypes } from 'lib/shopify/types';
import Link from 'next/link';
import * as React from 'react';

// Replace this with your real menu data
type MenuDropdownProps = {
  menu: MenuTypes[];
};

export function NavigationMenuComp({ menu }: MenuDropdownProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menu.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.items && item.items.length > 0 ? (
              <>
                <NavigationMenuTrigger>
                  <Link href={item.path}>{item.title}</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4 md:w-[400px]">
                    {item.items.map((subItem) => (
                      <ListItem key={subItem.title} title={subItem.title} href={subItem.path} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.path} passHref>
                <span className={navigationMenuTriggerStyle()}>
                  {item.title}
                </span>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        {props.href ? (
          <Link href={props.href}>
            <NavigationMenuLink asChild>
              <span
                ref={ref}
                className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
                {...props}
              >
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {children}
                </p>
              </span>
            </NavigationMenuLink>
          </Link>
        ) : null}
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
