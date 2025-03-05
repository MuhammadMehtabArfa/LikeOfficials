'use client';
import React, { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react';
import Image from 'next/image';
import { CheckCircle, Sparkle } from 'lucide-react';

interface CardProps {
    title: string;
    description: string;
    features?: string[];
    imageUrl?: string;
    iconUrl?: any;
    iconText?: string;
    style?: CSSProperties;
}

const Card: React.FC<CardProps> = ({ 
    title, 
    description, 
    features = [], 
    imageUrl, 
    iconUrl, 
    iconText = 'Premium', 
    style 
}) => {
    return (
        <div
            className="p-14 rounded-2xl h-[80vh] flex flex-col justify-between relative overflow-hidden"
            style={style}
        >
            {/* Top left corner - Icon and Text */}
            <div className="absolute top-8 left-8 flex items-center space-x-2">
                <div className='text-gray-500'>
                    {iconUrl }
                    
                    </div>
                    
                <span className="text-gray-500 text-sm">{iconText}</span>
            </div>

            {/* Main Content - Left Side */}
            <div className="flex-grow flex flex-row my-4">
                <div className="w-1/2 flex flex-col justify-center pr-4">
                    <h3 className="text-3xl font-bold mb-4 text-gray-800">{title}</h3>
                    <p className="text-gray-600 text-lg mb-6">{description}</p>

                    {/* Features List - Optional */}
                    {features.length > 0 && (
                        <ul className="space-y-2">
                            {features.map((feature, index) => (
                                <li 
                                    key={index} 
                                    className="flex items-center text-gray-700"
                                >
                                    <CheckCircle className="text-green-500 mr-2" size={20} />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Right Side - Image */}
                <div className="w-1/2 flex items-center justify-center relative">
                    {imageUrl && (
                        <div className="w-full h-4/5 relative">
                            <Image 
                                src={imageUrl} 
                                alt="Service Image" 
                                fill 
                                className="object-contain"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const CardStack: React.FC<{ children: ReactNode }> = ({ children }) => {
    const stackRef = useRef<HTMLDivElement>(null);
    const [scrollY, setScrollY] = useState(0);
    const [stackHeight, setStackHeight] = useState(0);
    const childrenArray = Array.isArray(children) ? children : [children];

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (stackRef.current) {
            setStackHeight(stackRef.current.scrollHeight - window.innerHeight);
        }
    }, [children]);

    const scrollProgress = Math.min(1, scrollY / stackHeight);

    return (
        <div
            className="min-h-screen pt-20"
            style={{
                background: `linear-gradient(135deg, #000000, #00008B, #0000FF, #FF69B4 ${scrollProgress * 70}%, #FFFFFF ${80 + scrollProgress * 20}%)`,
                transition: 'background 0.3s ease-out',
            }}
        >

            <div ref={stackRef} className="relative w-full max-w-4xl mx-auto">
                {childrenArray.map((child, index) => {
                    if (!child || !React.isValidElement(child)) return null;

                    const offset = index * 300;
                    const progress = Math.min(1, Math.max(0, (scrollY - offset) / 300));

                    const cardScale = 1 - progress * 0.05;
                    const yOffset = progress * -60;

                    const cardColors = ['#FFEBEE', '#E3F2FD', '#FFF3E0', '#E8F5E9'];
                    const boxShadow = [
                        '0 4px 8px rgba(255, 0, 0, 0.2)', 
                        '0 4px 8px rgba(0, 0, 255, 0.2)', 
                        '0 4px 8px rgba(255, 165, 0, 0.2)', 
                        '0 4px 8px rgba(0, 128, 0, 0.2)'
                    ];

                    return React.cloneElement(child as React.ReactElement<{ style?: CSSProperties }>, {
                        style: {
                            position: 'sticky',
                            top: '100px',
                            zIndex: index + 1,
                            transform: `translateY(${yOffset}px) scale(${cardScale})`,
                            transition: 'transform 0.1s ease-out',
                            backgroundColor: cardColors[index % cardColors.length],
                            boxShadow: boxShadow[index % boxShadow.length],
                        },
                    });
                })}
            </div>
        </div>
    );
};

export { CardStack, Card };