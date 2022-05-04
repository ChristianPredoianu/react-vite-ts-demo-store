import HeroSection from '@/components/hero-section/HeroSection';
import classes from '@/pages/Home.module.scss';

export default function Home() {
  return (
    <>
      <div className="container">
        <main className={classes.main}>
          <HeroSection />
        </main>
      </div>
    </>
  );
}
