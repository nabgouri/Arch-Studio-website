import HeroSection from "../components/HeroSection";
import heroImageDesktop from "../assets/images/aboutImages/aboutImage-desktop.png";
import heroImageTablet from "../assets/images/aboutImages/aboutImage-tablet.png";
import heroImageMobile from "../assets/images/aboutImages/aboutImage-mobile.png";
import DetailSection from "../components/DetailSection";
import LeadersSection from "../components/LeadersSection";
import secondaryImage from "../assets/images/aboutImages/Deatilimage.jpg";
export default function AboutPage() {
  return (
    <main>
      <HeroSection
        beforeClass=" md:before:content-['About']"
        heroImages={[heroImageDesktop, heroImageTablet, heroImageMobile]}
        title="Your team of professionals"
        paragraph="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
      ></HeroSection>
      <DetailSection
        secondaryImage={secondaryImage}
        title="Our Heritage"
        paragraphs={[
          "Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.",
          "Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.",
          "Our small team of world-class professionals provides input on every project.",
        ]}
      ></DetailSection>
      <LeadersSection></LeadersSection>
    </main>
  );
}
