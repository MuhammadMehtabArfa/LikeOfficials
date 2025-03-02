import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Nav = () => {
    return (
        <nav className="fixed top-0 w-full bg-transparent   z-50">
            <div className="ml-3">

                <div className=" flex gap-[500px]">
                    <a href="/" className="">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={130}
                            height={100}
                            priority
                        />
                    </a>
                    <div className="flex rounded-3xl px-[10px] mt-[14px] bg-neutral-300">

                        <div className="hidden md:ml-6 font-bold md:flex md:space-x-8">
                            <a href="#about" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-bold">About</a>
                            <a href="#work" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-bold">Work</a>
                            <a href="#contact" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-bold">Contact</a>
                            <a href="#pricing" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-bold">Pricing</a>
                            <a href="#testimonials" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-bold">Testimonials</a>
                            <a href="#faqs" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-bold">FAQs</a>
                            <Button className='mt-1.5 bg-black text-white font-extrabold' text="Click Me" link="https://example.com" />

                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Nav
