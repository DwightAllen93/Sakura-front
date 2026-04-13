import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { OurValues } from '../components/OurValues';
import { KeyFeatures } from '../components/KeyFeatures';
import { CommunityDiversity } from '../components/CommunityDiversity';
import { HomeLocationsPreview } from '../components/HomeLocationsPreview';

export function Home() {
  return (
    <>
      <Hero />
      <KeyFeatures />
      <HomeLocationsPreview />
      <Services />
      <OurValues />
      <CommunityDiversity />
      <About />
      <Contact />
    </>
  );
}