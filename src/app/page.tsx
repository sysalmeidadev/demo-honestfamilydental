import Header from '@/components/layout/Header';
import HeroSection from '@/components/home/HeroSection';
import SocialProofBar from '@/components/home/SocialProofBar';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeatureSection from '@/components/home/FeatureSection';
import ServicesSection from '@/components/home/ServicesSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SocialProofBar />
      <WhyChooseUs />
      <FeatureSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}
