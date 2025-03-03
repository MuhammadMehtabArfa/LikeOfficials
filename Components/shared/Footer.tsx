import React from 'react'
import Image from 'next/image'
type Props = {}

const Footer = (props: Props) => {
    return (
        <div>

            <footer className=" mt-[70px]   m-4">
                <div className="w-full max-w-[90%] bg-gray-100 rounded-4xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between mx-12">
                        <a href="/" className="inline-block">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={130}
                                height={100}
                                priority
                                className="w-[130px] h-[100px] object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
                            />
                        </a>

                        <ul className="flex flex-wrap items-center gap-[80px] mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:translate-y-1.5 hover:text-black me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:translate-y-1.5 hover:text-black me-4 md:me-6">Work</a>
                            </li>
                            <li>
                                <a href="#" className="hover:translate-y-1.5 hover:text-black me-4 md:me-6">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:translate-y-1.5 hover:text-black">Testimonials</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">LIKE OFFICIALS™</a>. All Rights Reserved.</span>
                </div>
            </footer>

        </div>
    )
}

export default Footer