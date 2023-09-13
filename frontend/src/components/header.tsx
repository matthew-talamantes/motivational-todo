"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import NavItem from './mainNav/navItem';

export default function Header({ textColor = 'black' }: { textColor?: string }) {

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
        switch (textColor) {
            case 'white': {
                colorClass = 'text-white';
            }
            case 'black': {
                colorClass = 'text-black';
            }

            default: {
                colorClass = 'text-black';
            }
        }
        return `flex justify-between items-center py-4 px-6 border-b-4 border-indigo-600 ${colorClass}`;
    };

    return (
        <header className={getHeaderClass(textColor)}>
            <h1>Motivational To-Do</h1>
            <nav aria-label="Main Menu">
                <ul>
                    {navItems.map((item, index) => (
                        <NavItem key={index} title={item.title} link={item.link} active={usePathname() === item.link} />
                    ))}
                </ul>
            </nav>
            <h2>Pathname: {usePathname()}</h2>
        </header>
    );
};