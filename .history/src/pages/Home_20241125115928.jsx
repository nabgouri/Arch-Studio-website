import HeroHomeSection from "../components/HeroHomeSection";
import DetailSection from "../components/DetailSection";
import AboutSection from "../components/AboutSetction";
import FeaturedCards from "../components/FeauterdCards";
import secondaryImage from "../assets/images/homeImages/homeSecondImage.png";

export default function HomePage() {
  return (
    <main className="relative md:before:absolute md:before:left-4 md:before:top-0 md:before:block md:before:bg-[#c8ccd8] md:before:text-lg md:before:font-medium md:before:leading-6 md:before:tracking-[18px] md:before:content-['HOME']">
      <HeroHomeSection></HeroHomeSection>
      <DetailSection
        secondaryImage={secondaryImage}
        className="md:mt-20 md:pt-[9.5rem] md:before:top-0 md:before:size-0 md:before:text-[7.5rem] md:before:font-bold md:before:leading-[12.5rem] md:before:-tracking-[3px] md:before:text-[#EEEFF4] md:before:content-['Welcome'] xl:mt-10 xl:pt-[9.5rem] xl:before:top-16 xl:before:text-[15.625rem] xl:before:-tracking-[5px]"
        title="Welcome to Arch Studio"
        paragraphs={[
          "We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.",
          "Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.",
          "We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.",
        ]}
      ></DetailSection>
      <AboutSection></AboutSection>
      <FeaturedCards></FeaturedCards>
    </main>
  );
}
