import React from "react";
import Logo from "../../assets/Logo.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react";

const navigation = [
  { id: 1, name: "HOME", href: "/", current: true },
  { id: 2, name: "INSTRUMENTS", href: "/instruments", current: false },
  { id: 3, name: "ABOUT", href: "/about", current: false },
  { id: 4, name: "CONTACT", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className="ml-5 mr-5 ">
      {/* LOGO */}
      <Image className="mx-auto" src={Logo} />
      {/* MENU */}
      <Disclosure
        as="nav"
        className="bg-transparent border-b-2 border-color-secondary w-90"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="selecter absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className=" transition-class inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-color-secondary">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block h-6 w-6 fill-color"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 md:place-content-center items-center justify-center sm:items-stretch ">
                  <div className="flex flex-shrink-0 items-center">
                    {/* <img
                      className="block h-8 w-auto lg:hidden"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    /> */}
                    <Icon
                      className="block h-10 w-auto lg:hidden"
                      icon="la:guitar"
                      color="#4d4d4d"
                      width="100"
                      height="100"
                    />
                    <Icon
                      className="hidden h-10 w-auto lg:block"
                      icon="la:guitar"
                      color="#4d4d4d"
                      width="100"
                      height="100"
                    />

                    {/* <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    /> */}
                  </div>
                  {}
                  <div className="hidden   md:justify-center sm:ml-6 sm:block">
                    <div className="flex space-x-4 md:place-content-center">
                      {navigation.map((item) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          className={classNames(
                            router.pathname == item.href
                              ? "color-bg-secondary text-white font-assistant"
                              : "color-secondary  color-bg-secondary-hover border-b-2 border-color-secondary hover:text-white font-assistant",
                            " px-3 py-2 text-xl font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  {/* <Menu as="div" className="relative ml-3 transition-class">
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="transition-class absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm transition-class text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu> */}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3 ">
                {navigation.map((item) => (
                  // <Disclosure.Button
                  //   key={item.name}
                  //   as="a"
                  //   href={item.href}
                  //   className={classNames(
                  //     item.current
                  //       ? "color-bg-secondary text-white font-assistant"
                  //       : "color-secondary hover:bg-gray-700 hover:text-white font-assistant",
                  //     "block  px-3 py-2 text-base font-medium"
                  //   )}
                  //   aria-current={item.current ? "page" : undefined}
                  // >
                  //   {item.name}
                  // </Disclosure.Button>
                  <Link
                    key={item.id}
                    href={item.href}
                    className={classNames(
                      router.pathname == item.href
                        ? "color-bg-secondary text-white font-assistant"
                        : "color-secondary hover:bg-gray-700 hover:text-white font-assistant",
                      "block  px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;
