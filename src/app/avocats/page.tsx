import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import HeroAvocats from '@/components/sections/avocats/HeroAvocats';
import DouleurChiffree from '@/components/sections/avocats/DouleurChiffree';
import FeaturesGrid from '@/components/sections/avocats/FeaturesGrid';
import CapabilitiesList from '@/components/sections/avocats/CapabilitiesList';
import CommentCaMarche from '@/components/sections/avocats/CommentCaMarche';
import RGPDPro from '@/components/sections/avocats/RGPDPro';
import PricingTeaser from '@/components/sections/avocats/PricingTeaser';
import FAQAvocats from '@/components/sections/avocats/FAQAvocats';
import CTAFinal from '@/components/sections/avocats/CTAFinal';

export const metadata = {
  title: 'OlympeAI pour avocats — Votre assistant juridique, 24/7',
  description:
    'Veille juridique, gestion de dossiers, relances automatiques, communication client. Tout ce qu\'un assistant juridique ferait, en continu.',
  openGraph: {
    title: 'OlympeAI pour avocats — Votre assistant juridique, 24/7',
    description:
      'Veille juridique, gestion de dossiers, relances automatiques, communication client.',
    url: 'https://olympeai.fr/avocats',
    siteName: 'OlympeAI',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function AvocatsPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroAvocats />
        <FeaturesGrid />
        <CapabilitiesList />
        <DouleurChiffree />
        <CommentCaMarche />
        <RGPDPro />
        <PricingTeaser />
        <FAQAvocats />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
