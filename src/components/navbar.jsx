'use client';
import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';

export default function Navbar({ allCommandData }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className="p-16 z-40 flex justify-between items-center">
            <Link href="/" className="flex font-medium text-xl items-center gap-4 hover:text-amber-600 z-40">
                <Image
                    src="/git.png"
                    alt="logo de Git"
                    width={30}
                    height={30}
                />
                Inicio
            </Link>
            <div className="relative group z-40">
                <button
                    className="hover:text-amber-600 flex items-center text-white  font-medium rounded-lg text-xl gap-4 py-2.5 pb-7 mr-2  focus:outline-none"
                    type="button"
                    onClick={handleMenu}>
                    Menu
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd">
                    </path></svg>
                </button>
                {/* Drawer component */}
                {isOpen && <div className="fixed top-0 left-0 z-20 w-full h-full bg-[#191919] opacity-75" onClick={handleMenu} />}
                <div
                    id="drawer-navigation"
                    className={`fixed flex z-30 flex-col h-full justify-between items-center  gap-4 top-0 right-0 z-40  p-4 overflow-y-auto transition-transform ${isOpen ? "" : "translate-x-full"
                        } bg-white w-80 dark:bg-[#000]`}
                    tabIndex={-1}
                    aria-labelledby="drawer-navigation-label"
                >
                    <Link
                        href="/"
                        id="drawer-navigation-label"
                        className="text-base font-semibold uppercase text-white hover:text-amber-600 flex justify-between items-center ">
                        Inicio
                    </Link>
                    <button
                        type="button"
                        data-drawer-hide="drawer-navigation"
                        aria-controls="drawer-navigation"
                        onClick={handleMenu}
                        className="text-white hover:text-amber-700 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center "
                    >
                        <svg className="w-6 h-6 text-white hover:text-amber-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                        </svg>
                        <span className="sr-only">Close menu</span>
                    </button>
                    <div className="py-4 overflow-y-auto z-30">
                        <ul className="space-y-2 font-medium flex flex-col gap-4">
                            {Object.keys(allCommandData).map((category) => {
                                const categoryInfo = allCommandData[category][0];
                                const { title } = categoryInfo;
                                return (
                                    <li key={category}>
                                        <Link href={`/commands/${category}`} className="text-white text-xl uppercase hover:text-amber-600">
                                            {title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                    </div>

                    <div className="flex gap-3 p-5 flex-wrap self-end items-center justify-center">
                        <p className="text-center w-full">Si te gusto esta guía puedes apoyarme con un <br/> <a href="https://cafecito.app/medicenferpy" target="_blank" className=" text-amber-700 font-bold hover:text-amber-600 hover:underline hover:underline-offset-4">&#123;Cafecito ☕&#125;</a></p>
                        <a href="https://twitter.com/medicenferpy" target="_blank">
                            <svg class="w-6 h-6 text-amber-700 hover:text-amber-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path fill="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z" />
                            </svg>
                        </a>

                        <a href="https://github.com/feralarcon1995" target="_blank">
                            <svg class="w-6 h-6 text-amber-700 hover:text-amber-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                            </svg>
                        </a>

                        <a href="https://www.youtube.com/@medicenferpy" target="_blank">
                            <svg class="w-6 h-6 text-amber-700  hover:text-amber-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                <path fill-rule="evenodd" d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z" clip-rule="evenodd" />
                            </svg>
                        </a>

                    </div>

                </div>

            </div>
        </nav>
    );
}
