"use client"
import Image from 'next/image';
import Marquee from 'react-marquee-slider';
import { motion } from 'framer-motion'
import { fadeIn } from '@/Components/variants/variants';
interface PortfolioItem {
    name: string;
    image: string;
}

const portfolioData: PortfolioItem[] = [
    { name: 'THE COPPER BARREL', image: '/portfolio2.png' },
    { name: 'ZITECH', image: '/portfolio3.png' },
    { name: 'KRIGEN.AI', image: '/portfolio4.png' },
    { name: 'BE NATIONAL', image: '/portfolio5.png' },
    { name: 'ATHLETE CONNECT', image: '/portfolio6.png' },
];

const ResponsivePortfolioMarquee: React.FC = () => {
    return (
        <motion.div
            variants={fadeIn("up", 1.2, 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}


            className="relative w-full mt-[80px]">
            <div className="absolute top-0 left-0 h-full w-40 opacity-60 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

            <Marquee
                velocity={32}
                resetAfterTries={200}
                scatterRandomly={false}
                 
                direction="rtl"
                onInit={() => console.log('Marquee initialized')}
                onFinish={() => console.log('Marquee finished')}
            >
                {portfolioData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col  gap-2 md:gap-4 lg:gap-6 mx-4" // Fixed width instead of max-w
                    >
                        <div className="w-[350px] rounded-2xl shadow-xl h-[280px] md:w-[500px] md:h-[400px] lg:h-[600px] lg:w-[800px] relative
">
                            <Image
                                src={item.image}
                                alt={item.name}
                                layout="fill"

                                className="object-cover rounded-2xl"
                            />
                        </div>
                        <span className="text-xs md:text-sm lg:text-xl font-bold  text-gray-800">{item.name}</span>
                    </div>
                ))}
            </Marquee>
        </motion.div>
    );
};

export default ResponsivePortfolioMarquee;