import CardsSection from "@components/cards-section";
import ContactSection from "@components/contact-section";
import HeroSection from "@components/hero-section";
import Nav from "@components/nav";


export default function Home() {
  return (
    <>
      <Nav />
      <div className="gap-[12px] sm:gap-[24px] p-[12px] sm:py-[12px] sm:px-[124px] mx-auto">
        <HeroSection />
        <CardsSection />
        <ContactSection />
      </div>
    </>
  );
}
