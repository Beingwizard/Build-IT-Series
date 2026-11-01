import React from 'react';

interface HeaderProps {
    title: string;
    navLinks: { name: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ title, navLinks }) => {
    return (
        <header>
            <h1>{title}</h1>
            <nav>
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;