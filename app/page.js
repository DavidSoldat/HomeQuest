import Content from './_components/Content';
import Faq from './_components/Faq';
import Features from './_components/Features';
import Hero from './_components/Hero';
import Offers from './_components/Offers';

export default function Home() {
  return (
    <main>
      <Hero />
      <Content />
      <Features />
      <Offers />
      <Faq />
    </main>
  );
}
