import { BrandPhilosophy } from "@/components/BrandPhilosophy";
import { CursorTrail } from "@/components/CursorTrail";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IntroLoader } from "@/components/IntroLoader";
import { MotionGallery } from "@/components/MotionGallery";
import { ProductSystem } from "@/components/ProductSystem";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Technology } from "@/components/Technology";

export default function Home() {
  return (
    <SmoothScroll>
      <IntroLoader />
      <CursorTrail />
      <Header />
      <Hero />
      <BrandPhilosophy />
      <ProductSystem />
      <Technology />
      <MotionGallery />
      <Footer />
    </SmoothScroll>
  );
}
