'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Divider,
} from '@nextui-org/react';
import Image from 'next/image';
import { Link as IntLink, useRouter } from '../i18n/routing';

import logo from '../media/logo.jpg';
import { useMessages, useTranslations } from 'next-intl';
import { FaChevronDown, FaPhone, FaInstagram, FaTiktok } from 'react-icons/fa';
import LangSelector from './LangSelector';

import { MdOutlineMailOutline, MdPhone } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { contact, socialLinks } from '../constants';

type Props = {};

function Header({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = React.useReducer(
    (current) => !current,
    false
  );
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();

  const handleScroll = () => {
    setScrollPosition(window.scrollY); // Track the scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const t = useTranslations('Navbar');
  const messages = useMessages();
  const services =
    typeof messages.Services === 'object' &&
    messages.Services !== null &&
    Object.values(messages.Services.servicesList);
  const menuItems = [
    { name: t('home'), href: '/' },
    {
      name: t('services'),
      href: '/services',
      submenu: Array.isArray(services)
        ? services.map((service) => {
            if (
              typeof service === 'object' &&
              service !== null &&
              'name' in service &&
              'slug' in service
            ) {
              return { name: service.name, slug: service.slug } as {
                name: string;
                slug: string;
              };
            } else {
              return null;
            }
          })
        : [],
    },
    { name: t('about'), href: '/about-us' },
  ];

  return (
    <>
      <Navbar
        height={'2.5rem'}
        className="hidden lg:flex absolute top-0 left-0 right-0 z-10 bg-transparent"
      >
        <NavbarContent
          className="hidden sm:flex gap-4 text-white"
          justify="center"
        >
          <NavbarItem>
            <Link
              color="secondary"
              className="flex gap-2"
              href={`mailto:${contact.email}`}
            >
              <MdOutlineMailOutline />
              <span className="text-xs">{contact.email}</span>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="secondary"
              href={socialLinks.maps}
              aria-current="page"
              className="flex gap-2"
            >
              <IoLocationOutline />
              <span className="text-xs capitalize">{t('address')}</span>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="secondary"
              href={`tel:${contact.phone}`}
              className="flex gap-2"
            >
              <MdPhone />
              <span className="text-xs">{contact.phone}</span>
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent
          as="div"
          className="items-center"
          justify="end"
        >
          <NavbarItem>
            <Link
              color="foreground"
              className="flex gap-2"
              href={socialLinks.instagram}
            >
              <FaInstagram />
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              className="flex gap-2"
              href={socialLinks.tiktok}
            >
              <FaTiktok />
            </Link>
          </NavbarItem>
          <NavbarItem className="lg:flex">
            <LangSelector />
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Bottom navBar */}
      <Navbar
        maxWidth="lg"
        className={`max-w-4xl shadow-md fixed left-0 right-0 mx-auto rounded-md z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'rounded-b-none' : ''
        } ${scrollPosition > 0 ? 'xl:top-[0.5rem]' : 'lg:top-[2rem]'}`} // Change top value based on scroll position
        height={'5rem'}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            // aria-label={isMenuOpen}
            className="lg:hidden"
          />
          <NavbarBrand className="flex gap-2">
            <Image
              src={logo}
              alt="logo"
              className="w-9 rounded-full"
            />
            <p className="font-bold text-inherit text-sky-700">{t('name')}</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="center">
          {menuItems.map((item, index) =>
            item.submenu ? (
              <Dropdown
                type="listbox"
                className="hidden lg:flex w-full"
                key={index}
              >
                <NavbarItem>
                  <DropdownTrigger>
                    <Link
                      className="hidden lg:flex w-full text-sky-700 hover:text-sky-500 cursor-pointer gap-1"
                      size="lg"
                    >
                      {item.name}
                      <FaChevronDown
                        fill="currentColor"
                        size={14}
                      />
                    </Link>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  aria-label="services"
                  className="w-[340px]"
                  itemClasses={{
                    base: 'gap-4',
                  }}
                >
                  {item?.submenu
                    .slice(0, 3) // Ensure we only take the first 5 items
                    .map((subItem, subIndex) => (
                      <DropdownItem
                        color="primary"
                        id="dropdown-item"
                        className="capitalize"
                        key={subIndex}
                        title={subItem?.name}
                        onPress={() =>
                          router.replace(`/services/${subItem?.slug}`)
                        }
                      />
                    ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <NavbarMenuItem key={`${item}-${index}`}>
                <IntLink
                  className="hidden lg:flex w-full text-sky-700 hover:text-sky-500"
                  href={item.href}
                >
                  {item.name}
                </IntLink>
              </NavbarMenuItem>
            )
          )}
          <NavbarItem>
            <Button
              as={Link}
              href="#"
              color="primary"
              className="text-sky-50 hover:text-yellow-300 px-6 hidden lg:flex rounded-full"
            >
              {t('call-you')}
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* mobile navbar */}
        <NavbarMenu>
          {menuItems.map((item, index) =>
            item.submenu ? (
              <Dropdown
                type="listbox"
                className="w-full"
                key={`${item.name}-${index}`}
              >
                <NavbarItem>
                  <DropdownTrigger>
                    <Link
                      className="w-full flex text-sky-700 hover:text-sky-500 cursor-pointer justify-between gap-1"
                      size="lg"
                    >
                      {item.name}
                      <FaChevronDown
                        fill="currentColor"
                        size={14}
                      />
                    </Link>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  aria-label="services"
                  className="w-[70vw]"
                  itemClasses={{
                    base: 'gap-4',
                  }}
                >
                  {item.submenu
                    .slice(0, 5) // Ensure we only take the first 5 items
                    .map((subItem, subIndex) => (
                      <DropdownItem
                        color="primary"
                        id="dropdown-item"
                        className="hover:bg-blue capitalize"
                        title={subItem?.name}
                        key={subIndex}
                        onPress={() =>
                          router.replace(`/services/${subItem?.slug}`)
                        }
                      />
                    ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <NavbarMenuItem
                onClick={setIsMenuOpen}
                key={`${item}-${index}`}
              >
                <IntLink
                  className="w-full text-sky-700"
                  href={item.href}
                  // size="lg"
                >
                  {item.name}
                </IntLink>
              </NavbarMenuItem>
            )
          )}
          <Divider className="my-4" />
          <NavbarMenuItem
            className="flex justify-between"
            key="lang"
          >
            <LangSelector />
            <Button
              as={Link}
              href="#"
              color="primary"
              className="text-sky-50 hover:text-yellow-300 rounded-full"
            >
              {t('call-you')}
              <FaPhone
                fill="currentColor"
                size={16}
              />
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}

export default Header;
