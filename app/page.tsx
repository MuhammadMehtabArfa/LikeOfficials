import First from "@/Components/Hero/First";
import FAQ from "@/components/sections/faq/default";
import PricingPage from "@/Components/pricing/PricingPage";
import Footer from "@/Components/shared/Footer";
import Testimonials from "@/Components/shared/Testimonial";
import WorkUs from "@/Components/Work/WorkUs";
export default function Home() {
  return (
    <><First />
      <PricingPage />
      <Testimonials />
      <FAQ />
      <Footer />
      <WorkUs />
    </>

  );
}
