"use client"
import React from 'react'
import { useState } from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import Image from 'next/image';

import logo from '../media/logo.jpg'
import {useMessages, useTranslations} from 'next-intl';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

type Props = {}

function Header({}: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = useTranslations('Navbar');
    const messages = useMessages();
    const menuItems = [
        { name: t('home'), href: '/' },
        { name: t('services'), href: '#', submenu: Object.values((messages.Navbar as { servicesList: any }).servicesList) },
        { name: t('about'), href: '/cabinet' },
        { name: t('contact'), href: '#' },
    ];
    console.log(menuItems[1].submenu);
    return (
        <Navbar maxWidth='xl' className='pt-8' onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="lg:hidden"
                />
                <NavbarBrand className='flex gap-2'>
                    <Image src={logo} alt="logo" className='w-9 rounded-full' />
                    <p className="font-bold text-inherit text-sky-700">Cabinet Dentaire Ennasr</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="center">
                {menuItems.map((item, index) => item.submenu ? 
                    (
                        <Dropdown className="hidden lg:flex w-full" key={`${item.name}-${index}`}>
                            <NavbarItem>
                                <DropdownTrigger>
                                <Link
                                    className="hidden lg:flex w-full text-sky-700 hover:text-sky-500 cursor-pointer gap-1"
                                >
                                    {item.name}
                                    <FaChevronDown fill="currentColor" size={16} />
                                </Link>
                                </DropdownTrigger>
                            </NavbarItem>
                            <DropdownMenu
                                aria-label="services"
                                className="w-[340px]"
                                itemClasses={{
                                base: "gap-4",
                                }}
                            >
                                {item.submenu
                                .slice(0, 5)  // Ensure we only take the first 5 items
                                .map((subItem, subIndex) => (
                                    <DropdownItem
                                    key={`${item.name}-${subIndex}`}
                                    description="Quelque-chose qui cloche."
                                    className='hover:bg-blue'
                                    color='primary'
                                    >
                                    {typeof subItem === "string" ? subItem : "Unknown Item"}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    ) 
                    :(
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                            className="hidden lg:flex w-full text-sky-700 hover:text-sky-500"
                            href={item.href}
                            size="md"
                            >
                            {item.name}
                            </Link>
                        </NavbarMenuItem>
                ))}
                <NavbarItem>
                    <Button as={Link} href="#" color='primary' className='text-sky-50 hover:text-yellow-300 rounded-full'>
                        {t('call-you')}
                        <FaChevronRight fill="currentColor" size={16} />
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                    className="w-full text-sky-700"
                    href={item.href}
                    size="lg"
                    >
                        {item.name}
                    </Link>
                </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}

export default Header