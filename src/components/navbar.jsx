'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar({ allCommandData }) {
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const handleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className="p-2 navegador">
            <button
                className="hover:text-amber-600 flex items-center text-white  font-medium rounded-lg text-xl gap-4 py-2.5 pb-7 mr-2  focus:outline-none"
                type="button"
                onClick={handleMenu}>
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="drawer-navigation" className={`absolute bg-neutral-950  md:fixed top-0 left-0 z-40 w-full md:w-64 h-screen  transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
                <div className="h-full px-3 py-4  md:overflow-y-auto z-30 bg-neutral-950 flex flex-col gap-2" onChange={handleMenu}>
                    <button
                        type="button"
                        data-drawer-hide="drawer-navigation"
                        aria-controls="drawer-navigation"
                        onClick={handleMenu}
                        className="text-white hover:text-amber-700 rounded-lg text-xl bold  flex gap-2  sm:hidden items-center self-auto p-2">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>

                        <span className="sr-only">Close menu</span>
                    </button>
                    <Link href="/" className="flex font-medium text-xl items-center gap-4 hover:text-amber-600 z-40">
                        <Image
                            src="/git.png"
                            alt="logo de Git"
                            width={30}
                            height={30}
                        />
                        Guía GIT
                    </Link>

                    {Object.keys(allCommandData).map((category) => {
                        const categoryInfo = allCommandData[category];
                        return (
                            <ul key={category} className=" py-4 space-y-2 font-medium flex flex-col gap-4 border-b border-neutral-300 ">
                                <li className="text-xl uppercase font-bold text-amber-600">
                                    {categoryInfo[0].title}
                                </li>
                                {categoryInfo.slice(1).map((commandInfo) => {
                                    const isActive = router.asPath === `/commands/${category}/${commandInfo.id}`;
                                    return (
                                        <li key={commandInfo.title} className={`flex items-center py-1 px-2  hover:text-amber-600 group ${isActive ? ' text-amber-600 border-l-2 border-amber-600 ' : ' text-neutral-400 '}`}>
                                            <Link href={`/commands/${category}/${commandInfo.id}`} as={`/commands/${category}/${commandInfo.id}`} >
                                                {commandInfo.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        );
                    })}
                </div>
            </aside>
        </nav>
    );
}
