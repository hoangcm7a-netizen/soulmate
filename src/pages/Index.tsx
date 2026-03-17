import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import FounderSection from "@/components/landing/FounderSection";
import CTASection from "@/components/landing/CTASection";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <HeroSection />
      <HowItWorks />
      <FounderSection />
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default Index;
