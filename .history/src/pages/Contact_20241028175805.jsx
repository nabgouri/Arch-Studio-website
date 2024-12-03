import HeroSection from "../components/HeroSection";
import heroImageDesktop from "../assets/images/contactImages/contactImage-desktop.png";
import heroImageTablet from "../assets/images/contactImages/contactImage-tablet.png";
import heroImageMobile from "../assets/images/contactImages/contactImage-mobile.png";
import DetailSection from "../components/DetailSection";
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
    <main>
      <HeroSection
        beforeClass=" md:before:content-['Contact']"
        heroImages={[heroImageDesktop, heroImageTablet, heroImageMobile]}
        title="Tell us about your project"
        paragraph="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
      ></HeroSection>
      <DetailSection
        officesDetails={officesDetails}
        title="Contact Details"
        className="flex"
      />
    </main>
  );
}
