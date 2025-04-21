/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { impactStats, impactContent } from "../data/impact";

type CounterProps = {
  targetValue: string;
};

const parseValue = (val: string) => {
  const match = val.match(/^(\d+)(K?)(\+?)(%?)$/i);
  if (!match) return { number: 0, suffix: "" };

  const [, numStr, k, plus, percent] = match;
  const number = parseInt(numStr);
  const suffix = `${k}${plus}${percent}`;
  return { number, suffix };
};

export const Counter = ({ targetValue }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { number, suffix } = parseValue(targetValue);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const stepTime = 16;
      const steps = duration / stepTime;
      const increment = number / steps;

      const animate = () => {
        start += increment;
        if (start >= number) {
          setCount(number);
        } else {
          setCount(Math.floor(start));
          requestAnimationFrame(animate);
        }
      };

      animate();
    }
  }, [isInView, number]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const OurImpact = () => {
  return (
    <div className='bg-[url("/images/impactbg.svg")] bg-cover  bg-right flex flex-col items-end text-white py-16 px-6'>
      <div className="w-full max-w-3xl space-y-2">
        <h2 className="heading font-bold heading-calisto mb-3 ">{impactContent.title}</h2>
        <p className="text-xl text-white mb-6 parahraph" dangerouslySetInnerHTML={{ __html: impactContent.subtitle }}></p>

        <div className="flex flex-wrap gap-12">
          {impactStats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-start  -space-y-4">
              <motion.div
                className="text-[65px] font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Counter targetValue={stat.number} />

              </motion.div>
              <div className="font-bold text-xl ">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
