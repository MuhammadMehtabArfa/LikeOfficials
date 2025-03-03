import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

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
        imageUrl: 'https://www.shutterstock.com/image-vector/web-development-line-icons-600w-1038015990.jpg'
    },
    {
        id: 2,
        title: 'E-Commerce Solutions',
        description: 'Launch or scale your online store with optimized Shopify or WooCommerce development, ensuring seamless transactions and user-friendly navigation.',
        imageUrl: 'https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/e-commerce-shopping-website-icon.png'
    },
    {
        id: 3,
        title: 'Custom Web Apps',
        description: 'Develop scalable and fully customized web applications using the latest technologies like React, Node.js, and more.',
        imageUrl: 'https://www.shutterstock.com/image-vector/web-development-line-icons-600w-1038015990.jpg'
    },
    {
        id: 4,
        title: 'UI/UX Design',
        description: 'Create intuitive, user-friendly interfaces that enhance customer engagement and improve conversions.',
        imageUrl: 'https://www.smashingmagazine.com/wp-content/uploads/2016/09/line-ux-icon-preview-opt.png'
    },
    {
        id: 5,
        title: 'Performance Optimization',
        description: 'Speed up your website, improve SEO rankings, and ensure a seamless browsing experience with technical enhancements.',
        imageUrl: 'https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/improvement-performance-icon.png'
    },
    {
        id: 6,
        title: 'API Development & Integration',
        description: 'Integrate third-party tools, automate workflows, and enhance your website’s functionality with secure API solutions.',
        imageUrl: 'https://www.shutterstock.com/image-vector/web-development-line-icons-600w-1038015990.jpg'
    },
    {
        id: 7,
        title: 'Website Maintenance & Support',
        description: 'Keep your website updated, secure, and running smoothly with ongoing maintenance and technical support.',
        imageUrl: 'https://www.shutterstock.com/image-vector/web-development-line-icons-600w-1038015990.jpg'
    }
];

const Services = () => {
    return (
        <div className="w-full py-[10%] bg-black">
            <div className="text-[30px] max-w-[40%] text-center mx-auto text-gray-500">
                <span className="text-white font-bold">Why work with us? </span>
                We streamline the development process by breaking projects into smaller, hyper-focused tasks for seamless execution.
            </div>
            <div className="flex mt-9 flex-wrap max-w-[80%] bg-black mx-auto justify-start gap-4">
                {data.map((item) => (
                    <Card
                        key={item.id}
                        className="relative w-[calc(25%-1rem)] bg-black text-white p-6 rounded-2xl border-0 shadow-2xs"
                    >
                        <div className="w-16 h-16 mx-auto mb-4">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <CardContent className="relative mt-[30] z-10">
                            <h2 className="text-lg font-bold">{item.title}</h2>
                            <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Services;
