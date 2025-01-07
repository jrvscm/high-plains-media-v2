import React from 'react';
import { motion, useScroll } from "framer-motion";
interface LiIconProps {
  reference: React.RefObject<HTMLElement>;
}

const LiIcon: React.FC<LiIconProps> = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="stroke-primary absolute left-0">
      <svg
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          pathLength="1"
          className="stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          pathLength="1"
          className="stroke-[4px] fill-white dark:fill-black"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          pathLength="1"
          className="animate-pulse stroke-1 fill-primary"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
