"use client"

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import NavItem from './mainNav/navItem';

export default function Header({ textColor = 'black' }: { textColor?: string }) {

    const [textColorState, setTextColorState] = React.useState(textColor);

    const navItems = [
        { title: 'Home', link: '/' },
        { title: 'To-Do', link: '/to-do' },
        { title: 'Events', link: '/events' },
        { title: 'Quotes', link: '/quotes' },
        { title: 'Images', link: '/images' },
        { title: 'Login', link: '/login' },
    ];

    const getHeaderClass = (textColor: string) => {
        let colorClass: string;
        if (textColor === 'white') {
            colorClass = 'text-white';
        } else if (textColor === 'black') {
            colorClass = 'text-black';
        } else {
            colorClass = 'text-black';
        }
        return `flex justify-between items-center py-4 px-6 border-b-4 border-indigo-600 ${colorClass}`;
    };

    return (
        <header className={getHeaderClass(textColorState)}>
            <h1>Motivational To-Do</h1>
            <nav aria-label="Main Menu">
                <ul>
                    {navItems.map((item, index) => (
                        <NavItem key={index} title={item.title} link={item.link} active={usePathname() === item.link} />
                    ))}
                </ul>
            </nav>
        </header>
    );
};