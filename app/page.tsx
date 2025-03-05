import First from "@/Components/Hero/First";
import FAQ from "@/components/sections/faq/default";
import PricingPage from "@/Components/pricing/PricingPage";
import Services from "@/Components/Servicess/Services";
import Footer from "@/Components/shared/Footer";
import Testimonials from "@/Components/shared/Testimonial";
import WorkUs from "@/Components/Work/WorkUs";
import ResponsivePortfolioMarquee from "@/Components/Portfolio Marquee/ResponsivePortfolioMarquee";
import { Card, CardStack } from "@/Components/shared/CardAnimation"
export default function Home() {
  return (
    <>
      <First />
      {/* <ResponsivePortfolioMarquee /> */}
      {/* <WorkUs /> */}

      <Services />
      <Testimonials />
      <CardStack> <div>Ali</div>
        <div>Aslam</div>
        <div>Akran</div></CardStack>
      <PricingPage />
      <FAQ />
      <Footer />

    </>

  );
}
