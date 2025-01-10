import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Details from "./Details";

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-32">
      <h2 className="font-bold text-5xl mb-16 w-full text-center text-primary md:text-6xl xs:text-4xl">
        Experience
      </h2>

      <div ref={ref} className="relative md:w-[75%] mx-auto w-full">
        {/* Progress Bar */}
        <motion.div
          className="absolute left-9 top-0 w-[1px] md:w-[1px] md:left-[30px] xs:left-[20px] h-full bg-primary"
          style={{ 
            scaleY: scrollYProgress, 
            transformOrigin: "top" 
          }}
          
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />

        {/* Timeline Items */}
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
                position="Founder/Developer"
                company="High Plains Media"
                companyLink="https://highplainsmedia.com"
                time="Nov, 2024 - Present"
                address="Remote"
                work="
                    Building web solutions for small businesses using a variety of technologies including but not limited to:
                    React, Node.js, Graphql, SQL and Typescript.
                "
            />
            <Details
                position="Senior Software Engineer"
                company="TechStyleOS"
                companyLink="https://www.justfab.com"
                time="Aug, 2020 - Nov, 2024"
                address="Remote"
                work="
                    Worked on a large distrubed team (comprised of db ops, api core, platform architechts, senior 
                    and staff engineers) to build and support REMIX a modernized e-commerce web 
                    application comprised of FabKids, ShoeDazzle, and JustFab. Technologies included React, 
                    TypeScript, Jest, HTML, SASS, RESTful APIs (Node.js), GraphQl, SQL, Git.
                "
            />
            <Details
                position="Frontend Software Engineer"
                company="TechStyleOS FabKids"
                companyLink="https://www.fabkids.com"
                time="Aug, 2018 - Aug, 2020"
                address="Remote"
                work="
                    Maintained and built features for FabKids e-commerce website. 
                    Modernized the FabKids checkout flow, converting the codebase 
                    from Coldfusion/cfml components to Vue.js/Node.js api.
                "
            />
            <Details
                position="Fullstack Developer"
                company="Scriptd"
                companyLink="https://www.linkedin.com/company/scriptd/"
                time="Jan, 2017 - Aug, 2018"
                address="Remote"
                work="
                    Built frontend react components that communicated with a firebase database.
                    Built command line tools to enhance our day to day work.
                "
            />
            <Details
                position="Journeyman Electrician"
                company="City of Gillette"
                companyLink="https://www.gillettewy.gov/Departments/Utilities"
                time="Jan, 2015 - Jan, 2017"
                address="
                    City West Building
                    611 N. Exchange Ave.
                    Gillette, WY.
                    82716
                "
                work="
                    Built Web based HMI's that city employees in water and waste water divisions 
                    interact with on a daily basis. HMI's that control pumps, tanks, and flow 
                    of the different systems throughout the city.
                "
            />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
