import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Values from '@/components/Values';
import Showcase from '@/components/Showcase';
import WhyUs from '@/components/WhyUs';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { getDictionary } from '@/lib/dictionaries';

export default async function Home({
  params,
}: {
  params: { lang: string };
}) {
  const dict = getDictionary(params.lang as 'lv' | 'en');

  return (
    <main className="relative">
      <Navigation lang={params.lang} dict={dict} />
      <Hero lang={params.lang} dict={dict} />
      <div className="glow-line" />
      <About lang={params.lang} dict={dict} />
      <div className="glow-line" />
      <Services lang={params.lang} dict={dict} />
      <div className="glow-line" />
      <Values lang={params.lang} dict={dict} />
      <div className="glow-line" />
      <Showcase lang={params.lang} dict={dict} />
      <div className="glow-line" />
      <WhyUs lang={params.lang} dict={dict} />
      <div className="glow-line" />
      <CTA lang={params.lang} dict={dict} />
      <Footer lang={params.lang} dict={dict} />
    </main>
  );
}
