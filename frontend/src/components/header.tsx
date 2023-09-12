"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import NavItem from './mainNav/navItem';

export default function Header() {

    const navItems = [
        { title: 'Home', link: '/' },
        { title: 'To-Do', link: '/to-do' },
        { title: 'Events', link: '/events' },
        { title: 'Quotes', link: '/quotes' },
        { title: 'Images', link: '/images' },
        { title: 'Login', link: '/login' },
    ];

    return (
        <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
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