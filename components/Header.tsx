import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center bg-gray-100 p-4 shadow-md">
            <div className="flex items-center">
                <span className="font-bold text-xl mr-2">Common Voice</span>
                <span className="text-sm text-gray-500">mozilla</span>
            </div>
            <nav className="flex space-x-4">
                <a href="#" className="hover:underline">Contribute</a>
                <a href="#" className="text-blue-600 underline">Speak</a>
                <a href="#" className="hover:underline">Listen</a>
                <a href="#" className="hover:underline">Write</a>
                <a href="#" className="hover:underline">Review</a>
            </nav>
            <div className="flex items-center space-x-4">
                <button className="bg-green-500 text-white px-4 py-1 rounded-full">Donate</button>
                <div className="flex items-center">
                    <Image src="/profile-pic.png" alt="Profile Picture" width={30} height={30} className="rounded-full" />
                    <span className="ml-2">ALVYN ABRANCHES</span>
                </div>
                <button className="text-gray-500">EN</button>
            </div>
        </header>
    );
};

export default Header;