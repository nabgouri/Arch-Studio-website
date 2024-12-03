import Button from "./Button";
import H2 from "./H2";

export default function AboutSetction() {
  return (
    <section className="mb-[4.5625rem] bg-[rgba(0,0,0,0.35)] bg-[url('src/assets/images/homeImages/aboutImage.png')] bg-cover bg-no-repeat px-8 py-[11.25rem] bg-blend-overlay md:mx-24 md:mb-[12.5rem] md:py-[10.5rem] xl:mx-[10.25rem] xl:pe-[29.75rem] xl:ps-[11.875rem]">
      <H2 className="text-white">Small team, big ideas</H2>
      <Button pathLink="/about">About Us</Button>
    </section>
  );
}
