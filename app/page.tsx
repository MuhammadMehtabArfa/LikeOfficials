'use client';

import First from "@/Components/Hero/First";
import FAQ from "@/Components/sections/faq/default";
import PricingPage from "@/Components/pricing/PricingPage";
import Footer from "@/Components/shared/Footer";
import Testimonials from "@/Components/shared/Testimonial";
import Services from "@/Components/Servicess/Services";
import { Album, BadgeDollarSign, Building2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import Lenis from '@studio-freight/lenis'
import { projects } from "@/utils/data";
import Card from "@/Components/shared/PortfolioCards";

export default function Home() {
  const container = useRef(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const [stackHeight, setStackHeight] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (stackRef.current) {
        const stackHeight = stackRef.current.scrollHeight - window.innerHeight;
        const progress = Math.min(1, window.scrollY / stackHeight);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (stackRef.current) {
      setStackHeight(stackRef.current.scrollHeight - window.innerHeight);
    }
  }, []);

  return (
    <>
      <First />
      <Services />
      <Testimonials />
      
      <div 
        ref={container} 
        className="min-h-screen pt-20 relative bg-black"
        style={{
          background: `linear-gradient(135deg, 
            #000000, 
            #00008B, 
            #0000FF, 
            #FF69B4, 
            #FFFFFF ${80 + scrollProgress * 20}%)`,
          transition: 'background 0.3s ease-out',
        }}
      >
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return (
            <Card 
              ref={stackRef} 
              key={`p_${i}`} 
              i={i} 
              {...project} 
              progress={scrollYProgress} 
              range={[i * .25, 1]} 
              targetScale={targetScale}
            />
          );
        })}
      </div>
      
      <PricingPage />
      <FAQ />
      <Footer />
    </>
  );
}