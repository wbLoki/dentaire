"use client"
import React from 'react'
import { useState } from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Divider} from "@nextui-org/react";
import Image from 'next/image';

import logo from '../media/logo.jpg'
import {useMessages, useTranslations} from 'next-intl';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import LangSelector from './LangSelector';

import { MdOutlineMailOutline, MdPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

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

    return (
        <header className=''>
            <Navbar className='hidden lg:flex bg-transparent' height={"2rem"}>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link color="foreground" className='flex gap-2'
                        href="mailto:drzade@tanger-dentiste.ma">
                            <MdOutlineMailOutline />
                            <span className='text-xs'>drzade@tanger-dentiste.ma</span>
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#" aria-current="page" className='flex gap-2'>
                            <IoLocationOutline />
                            <span className='text-xs'>14, rue tanger, Tanger, Maroc</span>
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#" className='flex gap-2'>
                            <MdPhone />
                            <span className='text-xs'>0612345678</span>
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent as="div" className="items-center" justify="end">
                    <NavbarItem className='lg:flex'>
                        <LangSelector />
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            
            {/* Bottom navBar */}
            <Navbar maxWidth='xl' className='max-w-4xl mx-auto' onMenuOpenChange={setIsMenuOpen}>
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
                            <Dropdown type='listbox' className="hidden lg:flex w-full" key={`${item.name}-${index}`}>
                                <NavbarItem>
                                    <DropdownTrigger>
                                    <Link
                                        className="hidden lg:flex w-full text-sky-700 hover:text-sky-500 cursor-pointer gap-1"
                                        size='md'
                                    >
                                        {item.name}
                                        <FaChevronDown fill="currentColor" size={14} />
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
                                        color='primary'
                                        id='dropdown-item'
                                        title={typeof subItem === "string" ? subItem : "Unknown Item"}
                                        >
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
                    {menuItems.map((item, index) => item.submenu ? 
                    (
                        <Dropdown type='listbox' className="w-full" key={`${item.name}-${index}`}>
                            <NavbarItem>
                                <DropdownTrigger>
                                <Link
                                    className="w-full text-sky-700 hover:text-sky-500 cursor-pointer justify-between gap-1"
                                    size='lg'
                                >
                                    {item.name}
                                    <FaChevronDown fill="currentColor" size={14} />
                                </Link>
                                </DropdownTrigger>
                            </NavbarItem>
                            <DropdownMenu
                                aria-label="services"
                                className="w-[70vw]"
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
                    :   
                    (
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
                    <Divider className="my-4" />
                    <NavbarMenuItem key='lang'>
                        <LangSelector />
                    </NavbarMenuItem>
                </NavbarMenu>
            </Navbar>
        </header>
    )
}

export default Header