'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { Menu, X } from 'lucide-react';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-transparent' : 'bg-transparent'}`}>
            <div className=" mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between py-4">
                    <Link href="/" className="flex-shrink-0 z-50 w-25 h-18 md:w-30 md:h-20 lg:w-35 lg:h-25  relative">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                               
                                  layout="fill"
                                                    className="object-cover "
                                priority
                            />
                                          </Link>

                    <button
                        className="md:hidden z-50 relative"
                        onClick={toggleMenu}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex  border-2 px-3 py-2 md:items-center md:space-x-8 bg-gray-400/30 backdrop-blur-md backdrop-saturate-150 border-white/20 rounded-full shadow-lg">
                        <Link href="#about" className="md:text-md sm:text-xs font-bold hover:font-extrabold text-gray-900 hover:text-gray-900 transition-colors">About</Link>
                        <Link href="#work" className="md:text-md sm:text-xs font-bold hover:font-extrabold text-gray-900 hover:text-gray-900 transition-colors">Work</Link>
                        <Link href="#contact" className="md:text-md sm:text-xs font-bold hover:font-extrabold text-gray-900 hover:text-gray-900 transition-colors">Contact</Link>
                        <Link href="#pricing" className="md:text-md sm:text-xs font-bold hover:font-extrabold text-gray-900 hover:text-gray-900 transition-colors">Pricing</Link>
                        <Link href="#testimonials" className="md:text-md sm:text-xs font-bold hover:font-extrabold text-gray-900 hover:text-gray-900 transition-colors">Testimonials</Link>
                        <Link href="#faqs" className="md:text-md sm:text-xs font-bold hover:font-extrabold text-gray-900 hover:text-gray-900 transition-colors">FAQs</Link>
                        < Button text='Book a call' link="/" className='md:text-md sm:text-xs  font-bold '/>
                    </div>

                    <div className="hidden md:block">

                    </div>

                    {/* Mobile Navigation */}
                    <div className={`
                        fixed inset-0 bg-white z-40 flex flex-col justify-center items-center
                        transition-all duration-300 ease-in-out
                        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                    `}>
                        <div className="flex flex-col items-center space-y-6 text-center">
                            <Link href="#about" className="text-2xl font-medium text-gray-900 hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>About</Link>
                            <Link href="#work" className="text-2xl font-medium text-gray-900 hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>Work</Link>
                            <Link href="#contact" className="text-2xl font-medium text-gray-900 hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
                            <Link href="#pricing" className="text-2xl font-medium text-gray-900 hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>Pricing</Link>
                            <Link href="#testimonials" className="text-2xl font-medium text-gray-900 hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>Testimonials</Link>
                            <Link href="#faqs" className="text-2xl font-medium text-gray-900 hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>FAQs</Link>


                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;