import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TentangSection from '../components/TentangSection';
import FakultasSection from '../components/FakultasSection';
import EventSection from '../components/EventSection';
import ArtikelSection from '../components/ArtikelSection';
import CollabSection from '../components/CollabSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TentangSection />
        <FakultasSection />
        <EventSection />
        <ArtikelSection />
        <CollabSection />
        <FAQSection />
        <CTASection />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}
