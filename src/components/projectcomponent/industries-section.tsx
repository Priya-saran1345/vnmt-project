import * as React from "react";
// import { cn } from "@/lib/utils";
import { industries } from "@/components/data/industries";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Wallet, BarChart, Building, Cpu, Film, Stethoscope, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Wallet,
  BarChart,
  Building,
  Cpu,
  Film,
  Stethoscope,
};

export function IndustriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full lg:w-[95%] 2xl:w-[77%] mx-auto px-4">
        <div className="text-center w-[30%] mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-2 heading-calisto heading">Our Industries</h2>
          <p className="text-[#818181] parahraph">
            We build customized solutions that meet the unique demands of different industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-8">
          {industries.map((industry: { icon: string; description: string; title: string; id: number; iconColor: string }) => {
            const Icon = iconMap[industry.icon];
            return (
<Card
  key={industry.id}
  className={`relative overflow-hidden transition-all duration-300 ease-in-out group bg-white hover:bg-${industry.iconColor} shadow-md`}
>
  <CardContent className="p-6">
    <div
      className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ease-in-out ${industry.iconColor} bg-opacity-20`}
      style={{ backgroundColor: industry.iconColor }}
    >
      <Icon className="w-16 h-16 text-white" />
    </div>
    <h3 className="text-xl font-semibold mb-2 subheading">{industry.title}</h3>
    <p className="text-gray-600">{industry.description}</p>
  </CardContent>
</Card>

            );
          })}
        </div>

        <div className="text-center">
          <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            Click here to View More
          </Link>
        </div>
      </div>
    </section>
  );
}
