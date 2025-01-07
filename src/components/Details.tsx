import React, { useRef } from "react";
import { motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-muted-foreground xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium text-muted-foreground w-full md:text-sm">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

export default Details;
