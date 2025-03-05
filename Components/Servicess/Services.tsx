import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants/variants';
type ServiceItem = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
};

const data: ServiceItem[] = [
    {
        id: 1,
        title: 'Web Development',
        description: 'Build custom, high-performing websites using WordPress, Shopify, or custom tech stacks that align with your business goals.',
        imageUrl: '/web.png'
    },
    {
        id: 2,
        title: 'E-Commerce Solutions',
        description: 'Launch or scale your online store with optimized Shopify or WooCommerce development, ensuring seamless transactions and user-friendly navigation.',
        imageUrl: '/ecommerece.png'
    },
    {
        id: 3,
        title: 'Custom Web Apps',
        description: 'Develop scalable and fully customized web applications using the latest technologies like React, Node.js, and more.',
        imageUrl: '/custom.png'
    },
    {
        id: 4,
        title: 'UI/UX Design',
        description: 'Create intuitive, user-friendly interfaces that enhance customer engagement and improve conversions.',
        imageUrl: '/responsive.png'
    },
    {
        id: 5,
        title: 'Performance Optimization',
        description: 'Speed up your website, improve SEO rankings, and ensure a seamless browsing experience with technical enhancements.',
        imageUrl: '/performance.png'
    },
    {
        id: 6,
        title: 'API Development & Integration',
        description: 'Integrate third-party tools, automate workflows, and enhance your website’s functionality with secure API solutions.',
        imageUrl: '/api.png'
    },
    {
        id: 7,
        title: 'Website Maintenance & Support',
        description: 'Keep your website updated, secure, and running smoothly with ongoing maintenance and technical support.',
        imageUrl: '/support.png'
    }
];

const Services = () => {
    return (
        <div className="w-full mt-[80px] py-[10%] bg-black">
            <div className=" flex justify-center text-center mx-auto text-gray-500">
                <h2 className="text-[15px] max-w-[80%] lg:max-w-[50%] mb-2 md:mb-7 lg:mb-13 xl:mb-17 text-center  md:text-[22px] lg:text-[30px]  font-bold">
                    <span className="text-white">Discover Our Services  </span>
                    <span className="text-gray-500">
                        We deliver high-quality web solutions with a team of experienced developers, ensuring tailored functionality and seamless user experiences.
                    </span>
                </h2>

            </div>
            <div className="flex mt- flex-wrap max-w-[80%] bg-black mx-auto justify-start gap-4">
                {data.map((item) => (
                    <motion.div
                        variants={fadeIn("up", 0.2, 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}

                        key={item.id}
                        className="relative lg:w-[calc(25%-1rem)] md:w-[calc(33%-1rem)] sm:w-[calc(50%-1rem)] bg-black text-white p-6 rounded-2xl border-0 shadow-2xs"
                    >
                        <div className="lg:w-9 w-7 h-7 lg:h-9 bg-gray-400 rounded-md  mb-4 relative left-0 top-0">
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                layout='fill'
                                className="p-1 object-contain"
                            />
                        </div>
                        <div className="relative mt-[30] z-10">
                            <h2 className="lg:text-lg text-sm md:text-base font-bold">{item.title}</h2>
                            <p className="text-gray-400 text-xs lg:text-base md:text-sm mt-1">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
