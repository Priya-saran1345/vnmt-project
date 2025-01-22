import Image from "next/image";
import { partners } from "@/components/data/partners";

export function TruestedPartner() {
  return (
    <div className="bg-gradient-to-b from-darkblue to-lightblue py-10">
      <div className="mx-auto px-4">
        <h2 className="heading font-bold text-center text-white mb-12">
          Trusted by Industry Leaders Worldwide
        </h2>
        <div className="overflow-hidden">
          {/* Row 1 - Scroll Left */}
          <div
            className="flex space-x-8 animate-scroll-left"
            style={{
              animation: "scroll-left 10s linear infinite",
              display: "flex",
              width: "fit-content",
            }}
          >
            {partners.slice(0, 8).map((partner) => (
              <div
                key={partner.id}
                className="p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="object-contain "
                />
              </div>
            ))}
          </div>
          {/* Row 2 - Scroll Right */}
          <div
            className="flex space-x-8 animate-scroll-right"
            style={{
              animation: "scroll-right 10s linear infinite",
              display: "flex",
              width: "fit-content",
            }}
          >
            {partners.slice(8, 16).map((partner) => (
              <div
                key={partner.id}
                className="p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="object-contain  "
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center w-fit mx-auto p-2 text-white rounded-lg bg-darkblue mt-8">
          <span>View All</span>
        </div>
      </div>
    </div>
  );
}
