'use client';
import React, { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react';

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
                    const boxShadow = ['0 4px 8px rgba(255, 0, 0, 0.2)', '0 4px 8px rgba(0, 0, 255, 0.2)', '0 4px 8px rgba(255, 165, 0, 0.2)', '0 4px 8px rgba(0, 128, 0, 0.2)'];

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

const Card: React.FC<{ title: string; content: string; style?: CSSProperties }> = ({ title, content, style }) => {
    return (
        <div
            className="p-8 rounded-2xl h-[60vh] flex flex-col justify-center items-center"
            style={style}
        >
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-600 text-lg">{content}</p>
        </div>
    );
};

export { CardStack, Card };

// Cards now have unique background colors and subtle shadows! Let me know if you want to tweak the styles or add more effects 🚀
