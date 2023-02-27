import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { HiBars3, HiXMark } from "react-icons/hi2";

const navigation = [
    { name: 'Notre Cabinet', href: '#' },
    { name: 'Soins & Services', href: '#' },
    { name: 'Nos Realisations', href: '#' },
    { name: 'Contactez-nous', href: '#' },
  ]

type Props = {}

function Header({}: Props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="px-6 pt-6 xl:pt-14 lg:px-8 h-auto max-w-screen-2xl mx-auto sm:text-xs xl:text-sm">
            <nav className="flex items-center justify-between" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Cabinet Dentaire Ennasr</span>
                    <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                </div>
            <div className="flex lg:hidden">
                <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
                >
                <span className="sr-only">Open main menu</span>
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-semibold leading-6 text-gray-900">
                    {item.name}
                </a>
                ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" className="leading-6 text-white bg-purple rounded-md py-2 px-5">
                On Vous Rappelle ?
                </a>
            </div>
            </nav>
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <HiXMark className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                                    >
                                    {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-white bg-purple text-center"
                                >
                                    On Vous Rappelle ?
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
      </div>
    )
}

export default Header