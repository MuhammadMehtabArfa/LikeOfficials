import First from "@/Components/Hero/First";
import FAQ from "@/Components/sections/faq/default";
import PricingPage from "@/Components/pricing/PricingPage";
import Footer from "@/Components/shared/Footer";
import Testimonials from "@/Components/shared/Testimonial";
import { CardStack, Card } from "@/Components/shared/CardAnimation"
import Services from "@/Components/Servicess/Services";
import { Album, BadgeDollarSign, Building2 } from "lucide-react";

export default function Home() {
  return (
    <>
      <First />
      <Services />
      <Testimonials />
      <CardStack>
        <Card 
          title="Web Development Mastery"
          description="Transform your digital presence with cutting-edge web solutions"
          features={[
            "Responsive Design",
            "SEO Optimization",
            "Performance Tuning",
            "Cross-Browser Compatibility"
          ]}
          imageUrl="/web-development.png"
          iconUrl={<Album className="w-4 h-4"/>}
          iconText="Professional"
        />
        <Card 
          title="E-Commerce Excellence"
          description="Boost your online sales with our comprehensive e-commerce strategies"
          features={[]}
          imageUrl="/ecommerce.png"
          iconUrl={<Building2 className="w-4 h-4"/>}
          iconText="Business"
        />
        <Card 
          title="Digital Marketing Insights"
          description="Elevate your brand with data-driven marketing approaches that deliver measurable results and increase your online visibility"
          features={[
            "Social Media Marketing",
            "Content Strategy"
          ]}
          imageUrl="/digital-marketing.png"
          iconUrl={<BadgeDollarSign className="w-4 h-4"/>}
          iconText="Premium"
        />
      </CardStack>
      <PricingPage />
      <FAQ />
      <Footer />
    </>
  );
}