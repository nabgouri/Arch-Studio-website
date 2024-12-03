import H2 from "./H2";
import OfficeInfo from "./OfficeInfo";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export default function DetailSection({
  title,
  paragraphs,
  officesDetails,
  className,
  secondaryImage,
  officeClass,
}) {
  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    inView: { opacity: 1, y: 0 },
  };
  return (
    <motion.section
      variants={sectionVariants}
      initial="initial"
      whileInView="inView"
      transition={{
        duration: 0.6,
        delay: 0.2,
        type: "spring",
        stiffness: 50,
        damping: 10,
        mass: 0.5,
      }}
      viewPort={{ amount: 0.5 }}
      className={twMerge(
        "relative mb-28 mt-16 justify-end gap-[7.75rem] px-8 pt-16 before:absolute before:left-8 before:top-0 before:block before:h-[0.0625rem] before:w-16 before:bg-[#c8ccd8] md:mt-40 md:px-[6.0625rem] md:pt-12 md:before:left-[6.0625rem] xl:mb-[12.5rem] xl:mt-[12.5rem] xl:flex xl:justify-normal xl:px-[10.25rem] xl:pt-0 xl:before:left-[10.25rem]",
        className,
      )}
    >
      <div className={twMerge("self-end", officeClass)}>
        <H2>{title}</H2>
        {paragraphs ? (
          <section className="flex flex-col gap-6">
            {paragraphs.map((paragraph, index) => {
              return (
                <p
                  className="text-lg font-medium leading-6 text-[#60636d]"
                  key={index}
                >
                  {paragraph}
                </p>
              );
            })}
          </section>
        ) : (
          <section className="flex flex-col gap-10 xl:flex-grow xl:flex-row xl:justify-evenly xl:gap-0">
            {officesDetails.map((officeDetail, index) => {
              return <OfficeInfo officeDetail={officeDetail} key={index} />;
            })}
          </section>
        )}
      </div>
      {paragraphs && (
        <img
          src={secondaryImage}
          alt="second image"
          className="hidden xl:block"
        />
      )}
    </motion.section>
  );
}
