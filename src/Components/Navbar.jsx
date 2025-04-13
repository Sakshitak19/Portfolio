import React, { useState } from 'react';
import { NAVIGATION_LINKS } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed left-0 right-0 top-0 z-50">
            {/* Desktop/Laptop Navbar - More subtle black, shorter width */}
            <div className="mx-auto hidden max-w-2xl bg-black/50 px-6 py-3 backdrop-blur-sm md:block">
                <ul className="flex items-center justify-center gap-8">
                    {NAVIGATION_LINKS.map((item, index) => (
                        <li key={index}>
                            <a 
                                className="text-sm font-medium text-white hover:text-yellow-400 transition-colors" 
                                href={item.href} 
                                onClick={(e) => handleLinkClick(e, item.href)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Header */}
            <div className="flex items-center justify-between bg-black/80 px-4 py-3 backdrop-blur-md md:hidden">
                <a href="#" className="text-xl font-bold text-white hover:text-yellow-400 transition-colors">
                    Sakshi Tak
                </a>
                <button 
                    className="focus:outline-none text-white" 
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <FaTimes className="h-6 w-6" />
                    ) : (
                        <FaBars className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden">
                    <div className="flex justify-end p-4">
                        <button 
                            onClick={toggleMobileMenu}
                            className="rounded-full bg-black/30 p-2 text-white focus:outline-none"
                            aria-label="Close menu"
                        >
                            <FaTimes className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-4 flex flex-col items-center px-4">
                        <ul className="w-full max-w-xs space-y-6">
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a 
                                        className="block py-3 text-center text-xl font-medium text-white hover:text-yellow-400 transition-colors" 
                                        href={item.href} 
                                        onClick={(e) => handleLinkClick(e, item.href)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;