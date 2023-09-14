"use client"

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import NavItem from './mainNav/navItem';

import styles from './header.module.scss';

export default function Header({ textColor = 'black' }: { textColor?: string }) {

    const navItems = [
        { title: 'Home', link: '/' },
        { title: 'To-Do', link: '/to-do' },
        { title: 'Events', link: '/events' },
        { title: 'Quotes', link: '/quotes' },
        { title: 'Images', link: '/images' },
        { title: 'Login', link: '/login' },
    ];

    return (
        <header id="siteHeader" className="" style={{ "color": textColor }}>
            <a id="site-branding" href="/"><h1 id="site-title">Motivational To-Do</h1></a>
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