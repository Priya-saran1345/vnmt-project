import React from "react";
import { impactStats } from "../data/impact";

const OurImpact = () => {
  // const numberRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className='bg-[url("/images/impactbg.svg")] bg-cover bg-center flex flex-col items-end text-white  py-16'>
<div className="w-full max-w-4xl space-y-2">
      <h2 className="heading font-bold heading-calisto mb-3">Our Impact</h2>
      <p className="text-xl text-white mb-6">Driving Success Beyond Expectations</p>


        <div className="flex flex-wrap  gap-12">
          {impactStats.map((stat) => (
            <div key={stat.id} className="flex flex-col items- w-48 -space-y-4">
              <div
                className="text-[65px] font-bold text-white"
              >
                {stat.number}
              </div>
              <div className="font-bold text-xl">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default OurImpact;
