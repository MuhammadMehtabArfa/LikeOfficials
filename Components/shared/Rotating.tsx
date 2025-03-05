"use client";
import { motion } from 'framer-motion'
import { fadeIn } from "../variants/variants"
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
        <div

            className=''><motion.div
                variants={fadeIn("up", 0.1, 0.3)}
                initial="hidden"
                
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}

                className="text-2xl md:text-3xl lg:text-5xl font-bold">
                Development partner <br /> for{' '}
                <span
                    className={`${gradients[index]} bg-clip-text text-transparent transition-all duration-500`}
                >
                    {texts[index]}
                </span>

            </motion.div>
            <motion.div
                variants={fadeIn("up", 0.2, 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}


                className="lg:max-w-[50%] text-base md:text-lg lg:text-xl mt-7">Get a stunning, high-performing website from a top-tier dev team with flexible, project-based pricing.
                We'll handle everything from concept to launch.</motion.div>

            <motion.div variants={fadeIn("up", 0.3, 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }} className="mt-3 flex gap-3">
                <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-green-400"></span>

                </span>
                <h1 className='mt-[-5px]'> Available 24/7</h1>
            </motion.div>
            <motion.div
                variants={fadeIn("up", 0.5, 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}

                className="flex gap-2 mt-5 lg:max-w-[50%]">
                <Button className='mt-1.5  bg-black text-white text-xs  md:text-md sm:text-xs' text="Book a Call" link="https://example.com" />
                <Button className='mt-1.5  md:text-md sm:text-xs text-xs  font-bold border-2 ' text="Show Pricing" link="https://example.com" />
            </motion.div>
        </div>

    );
};

export default Rotating;
