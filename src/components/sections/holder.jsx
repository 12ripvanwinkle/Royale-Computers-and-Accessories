import React from "react";

const services = [
  {
    title: "Maintenance",
    price: "$99",
    description:
      "Routine checkups and updates to keep your IT systems performing at their best.",
    icon: "square",
  },
  {
    title: "Repair",
    price: "$149",
    description:
      "Rapid response for unexpected issues, restoring your business swiftly.",
    icon: "circle",
  },
  {
    title: "Cloud Setup",
    price: "$89",
    description:
      "Seamless migrations to cloud solutions—secure, stable, and ready for growth.",
    icon: "triangle",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Effortless Tech.
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Modern solutions for your business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col"
            >
              {/* Card */}
              <div className="relative rounded-3xl bg-neutral-900 h-80 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:-translate-y-2">
                
                {/* Icon Placeholder */}
                {service.icon === "square" && (
                  <div className="w-20 h-20 bg-neutral-700 rounded-lg" />
                )}
                {service.icon === "circle" && (
                  <div className="w-20 h-20 bg-neutral-700 rounded-full" />
                )}
                {service.icon === "triangle" && (
                  <div className="w-0 h-0 
                                  border-l-[40px] border-l-transparent
                                  border-r-[40px] border-r-transparent
                                  border-b-[70px] border-b-neutral-700" />
                )}
              </div>

              {/* Text Content */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold">
                  {service.title}. {service.price}
                </h3>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
