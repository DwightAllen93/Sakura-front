import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { OurValues } from '../components/OurValues';
import { KeyFeatures } from '../components/KeyFeatures';
import { CommunityDiversity } from '../components/CommunityDiversity';

export function Home() {
  return (
    <>
      <Hero />
      <KeyFeatures />
      <Services />
      <OurValues />
      <CommunityDiversity />
      <About />
      <Contact />
    </>
  );
}