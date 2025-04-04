/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useRef, useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import useClickOutside from '@/hooks/useClickOutside';
import { IoMdSearch } from 'react-icons/io';
import { useRouter } from 'next/navigation';

const transition = {
    type: 'spring',
    bounce: 0.1,
    duration: 0.2,
};

const items = [
    {
        title: 'NetSuite Consulting',
        description: 'Expert guidance for your NetSuite implementation',
        path: '/netsuite/consulting',
        icon: 'consulting',
    },
    {
        title: 'NetSuite Integration',
        description: 'Seamless connection with your existing systems',
        path: '/netsuite/integration',
        icon: 'integration',
    },
    {
        title: 'NetSuite Support',
        description: '24/7 support for your NetSuite environment',
        path: '/netsuite/support',
        icon: 'support',
    },
];

export default function SearchPopover({setIsOpen}:any) {
    const [is_Open, setIs_Open] = useState(false);
    const [searchText, setSearchText] = useState('');
    const containerRef: any = useRef(null);
    const router = useRouter();

    useClickOutside(containerRef, () => {
        setIs_Open(false);
    });

    const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <MotionConfig transition={transition}>
            <div className='relative' ref={containerRef}>
                <button
                    className='flex items-center justify-center rounded-lg p-2 text-orange hover:bg-orange-100 focus:outline-none'
                    onClick={() => setIs_Open((prev) => !prev)}
                    onMouseEnter={() => {
                        setIsOpen(false)
                      }}
                    aria-label='Search'
                >
                    <IoMdSearch className='text-2xl' />
                </button>
                {is_Open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className='absolute -left-14 2xl:left-0 top-full mt-2 w-60 rounded-lg bg-white p-2 shadow-lg border border-gray-200'
                    >
                        <input
                            type='text'
                            className='w-full rounded-lg border border-orange p-2 text-sm text-zinc-900 placeholder-zinc-500 focus:outline-none'
                            autoFocus
                            placeholder='Search Services'
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        {searchText && (
                            <ul className='mt-2 border-t border-gray-200'>
                                {filteredItems.length > 0 ? (
                                    filteredItems.map((item) => (
                                        <li
                                            key={item.path}
                                            className='p-2 cursor-pointer hover:bg-orange-100 rounded'
                                            onClick={() => router.push(item.path)}
                                        >
                                            {item.title}
                                        </li>
                                    ))
                                ) : (
                                    <li className='p-2 text-gray-500'>No results found</li>
                                )}
                            </ul>
                        )}
                    </motion.div>
                )}
            </div>
        </MotionConfig>
    );
}