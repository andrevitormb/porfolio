import Head from '@/components/Head';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <>
      <Head title="Andre Macedo" />
      <main className='bg-stone-300 dark:bg-stone-800'>
        <Navbar />
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
      </main>
    </>
  );
}