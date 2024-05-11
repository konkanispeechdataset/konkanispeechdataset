"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-900 text-white py-4 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src=""
                            alt="Konkani Speech"
                            className="h-8 w-auto"
                        />
                        <span className="text-lg font-medium">Konkani Speech</span>
                    </Link>
                </div>
                <div className="hidden md:flex space-x-6">
                    <Link href="/speak" className="hover:text-gray-400">
                        Speak
                    </Link>
                    <Link href="/listen" className="hover:text-gray-400">
                        Listen
                    </Link>
                    <Link href="/validate" className="hover:text-gray-400">
                        Validate
                    </Link>
                    <Link href="/contribute" className="hover:text-gray-400">
                        Contribute
                    </Link>
                </div>
                <button
                    className="md:hidden p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? (
                        <FiX className="h-6 w-6" />
                    ) : (
                        <FiMenu className="h-6 w-6" />
                    )}
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-900 py-4 px-4 space-y-2">
                    <Link href="/speak" className="block hover:text-gray-400">
                        Speak
                    </Link>
                    <Link href="/listen" className="block hover:text-gray-400">
                        Listen
                    </Link>
                    <Link href="/validate" className="block hover:text-gray-400">
                        Validate
                    </Link>
                    <Link href="/contribute" className="block hover:text-gray-400">
                        Contribute
                    </Link>
                </div>
            )}
        </header>
    );
}