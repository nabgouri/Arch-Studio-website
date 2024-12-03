import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
export default function HeroSection({
  title,
  paragraph,
  heroImages,
  beforeClass,
}) {
  const [heroImageDesktop, heroImageTablet, heroImageMobile] = heroImages;
  return (
    <motion.section className="md:col flex grid-rows-1 flex-col md:grid md:px-[6.0625rem] xl:px-[10.25rem]">
      <div className="relative col-start-1 col-end-1 row-start-1 row-end-1">
        <picture>
          <source media="(min-width: 768px )" srcSet={heroImageTablet} />
          <source media="(min-width: 1440px)" srcSet={heroImageDesktop} />
          <img src={heroImageMobile} />
        </picture>
        <div className="absolute inset-0 bg-black opacity-35 xl:max-h-[720px] xl:max-w-[573px]"></div>
      </div>
      <div
        className={twMerge(
          "z-10 col-start-1 col-end-1 row-start-1 row-end-1 -mt-11 me-8 bg-white ps-8 pt-11 before:-top-[5.5rem] before:right-0 md:relative md:me-0 md:ms-14 md:mt-[289px] md:ps-14 md:pt-40 md:before:absolute md:before:block md:before:text-[7.5rem] md:before:font-bold md:before:leading-[12.5rem] md:before:-tracking-[3px] md:before:text-[#EEEFF4] xl:ms-[30.125rem] xl:mt-[13.5625rem] xl:before:text-[15.625rem]",
          beforeClass,
        )}
      >
        <h1 className="mt-5 text-5xl font-bold leading-[3.25rem] text-[#1B1D23] md:mt-0 md:text-7xl md:leading-[4rem] md:-tracking-[2px]">
          {title}
        </h1>
        <p className="mt-[1.3125rem] text-lg font-medium leading-6 text-[#60636d] md:mt-[2.375rem]">
          {paragraph}
        </p>
      </div>
    </motion.section>
  );
}
