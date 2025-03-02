"use client";

import { useState, useEffect } from 'react';
import Button from './Button';

const Rotating = () => {
    const texts = ['Brands', 'Startups', 'Agencies'];
    const gradients = [
        'bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500',
        'bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500',
        'bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500',
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1500); // Change text every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <><div className="text-5xl font-bold">
            Development partner <br /> for{' '}
            <span
                className={`${gradients[index]} bg-clip-text text-transparent transition-all duration-500`}
            >
                {texts[index]}
            </span>

        </div>
            <div className="max-w-[50%] text-1xl mt-7">Get a stunning, high-performing website from a top-tier dev team with flexible, project-based pricing.
                We'll handle everything from concept to launch.</div>

            <div className="mt-3 flex gap-3">
                <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-green-400"></span>

                </span>
                <h1 className='mt-[-5px]'> Available 24/7</h1>
            </div>
            <div className="flex gap-2 mt-5 max-w-[50%]">
                <Button className='mt-1.5 font-extrabold bg-black text-white ' text="Click Me" link="https://example.com" />
                <Button className='mt-1.5  font-extrabold bg-gray-200 text-black' text="Click Me" link="https://example.com" />
            </div>
        </>

    );
};

export default Rotating;
