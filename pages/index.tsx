import Head from '@/components/Head';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
export default function Home() {
  return (
    <>
      <Head title="Minha Página Inicial" />
      <main>
        <Navbar />
        <HeroSection/>
      </main>
    </>
  );
}