import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import OverviewSection from '../components/sections/OverviewSection';
import RuangSection from '../components/sections/RuangSection';
import TraitsSection from '../components/sections/TraitsSection';
import FakultasSection from '../components/sections/FakultasSection';
import FinalCTA from '../components/sections/FinalCTA';
import FAQSection from '../components/sections/FAQSection';
import Footer from '../components/sections/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <RuangSection />
        <TraitsSection />
        <FakultasSection />
        <FinalCTA />
        <FAQSection />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}
