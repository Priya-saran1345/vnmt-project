import Image from "next/image";
import { partners } from "@/components/data/partners";

export function TruestedPartner() {
  return (
    <div className="">
      <div className="mx-auto">
        <div className="bg-gradient-to-t rounded-t-3xl py-4 flex items-center justify-center from-darkblue to-blue">
          <h2 className="heading heading-calisto font-bold text-center text-white">
            Trusted by Industry Leaders Worldwide
          </h2>
        </div>
        <div className="overflow-hidden bg-white">
          {/* Row 1 - Scroll Left */}
          <div
            className="flex space-x-8 "
            style={{
              display: "flex",
              width: "fit-content",
            }}
          >
            {/* Duplicate the logos to create seamless scroll */}
            {partners.slice(0, 8).map((partner) => (
              <div
                key={partner.id}
                className="p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
            {/* Duplicated row for seamless scroll */}
            {partners.slice(0, 8).map((partner) => (
              <div
                key={`dup-${partner.id}`}
                className="p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Row 2 - Scroll Right */}
          <div
            className="flex space-x-8 "
            style={{
              display: "flex",
              width: "fit-content",
            }}
          >
            {/* Duplicate the logos to create seamless scroll */}
            {partners.slice(8, 16).map((partner) => (
              <div
                key={partner.id}
                className="p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
            {/* Duplicated row for seamless scroll */}
            {partners.slice(8, 16).map((partner) => (
              <div
                key={`dup-${partner.id}`}
                className="p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="h-5 bg-gradient-to-t from-darkblue to-lightblue"></div>
      </div>
    </div>
  );
}
