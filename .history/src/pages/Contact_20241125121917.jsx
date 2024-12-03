import HeroSection from "../components/HeroSection";
import heroImageDesktop from "../assets/images/contactImages/contactImage-desktop.png";
import heroImageTablet from "../assets/images/contactImages/contactImage-tablet.png";
import heroImageMobile from "../assets/images/contactImages/contactImage-mobile.png";
import DetailSection from "../components/DetailSection";
import Maps from "../components/Map";
import Form from "../components/Form";

const officesDetails = [
  {
    title: "Main Office",
    mail: "archone@mail.com",
    adress: "1892  Chenoweth Drive TN",
    phone: "123-456-3451",
  },
  {
    title: "Office ||",
    mail: "archtwo@mail.com",
    adress: "3399  Wines Lane TX",
    phone: "832-123-4321",
  },
];
export default function ContactPage() {
  return (
    <main className="relative md:before:absolute md:before:left-4 md:before:top-0 md:before:block md:before:rotate-90 md:before:pr-12 md:before:text-lg md:before:font-medium md:before:leading-6 md:before:tracking-[18px] md:before:text-[#c8ccd8] md:before:content-['CONTACT']">
      <HeroSection
        beforeClass=" md:before:content-['Contact']"
        heroImages={[heroImageDesktop, heroImageTablet, heroImageMobile]}
        title="Tell us about your project"
        paragraph="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
      ></HeroSection>
      <DetailSection
        officesDetails={officesDetails}
        title="Contact Details"
        className=""
        officeClass=" xl:flex  justify-between flex-grow"
      />
      <Maps />
      <Form />
    </main>
  );
}
