import React from "react";

type ServiceItem = {
  icon: string; // Assuming icon is a path to an image or SVG
  title: string;
  description: string;
  onClick: () => void; // Click handler for each service item
};

type ServiceSectionProps = {
  decorationText: string;
  sectionTitle: string;
  description: string;
  services: ServiceItem[];
};

const ServiceSection: React.FC<ServiceSectionProps> = ({
  decorationText,
  sectionTitle,
  description,
  services,
}) => {
  return (
    <section className="py-12 px-4 text-center">
      <div className="text-violet-500 uppercase">{decorationText}</div>
      <h2 className="text-5xl font-bold mt-4">{sectionTitle}</h2>
      <p className="mt-4 mx-auto max-w-screen-md">{description}</p>
      <div className="flex flex-wrap justify-center gap-20 mt-20">
        {services.map((service, index) => (
          <div key={index} className="min-w-[350px] shrink-0 text-center cursor-pointer" onClick={service.onClick}>
            <img src={service.icon} alt="" className="w-6 mx-auto" />
            <h3 className="text-lg font-semibold mt-2">{service.title}</h3>
            <p className="mt-1">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Render example
const ExampleServiceSection = () => {
  const services: ServiceItem[] = [
    {
      icon: "heart.svg",
      title: "Service 1",
      description: "Brief description of Service 1.",
      onClick: () => console.log("Service 1 clicked"),
    },
    {
      icon: "message.svg",
      title: "Service 2",
      description: "Brief description of Service 2.",
      onClick: () => console.log("Service 2 clicked"),
    },


    {
        icon: "heart.svg",
        title: "Service 1",
        description: "Brief description of Service 1.",
        onClick: () => console.log("Service 1 clicked"),
      },
      {
        icon: "message.svg",
        title: "Service 2",
        description: "Brief description of Service 2.",
        onClick: () => console.log("Service 2 clicked"),
      },

      {
        icon: "heart.svg",
        title: "Service 1",
        description: "Brief description of Service 1.",
        onClick: () => console.log("Service 1 clicked"),
      },
      {
        icon: "message.svg",
        title: "Service 2",
        description: "Brief description of Service 2.",
        onClick: () => console.log("Service 2 clicked"),
      },
    // Add more services as needed
  ];

  const decorationText = "Our Services";
  const sectionTitle = "What We Offer";
  const description = "Explore our wide range of services designed to help you achieve your goals. Our commitment is to provide excellence and innovation in everything we do.";

  return (
    <ServiceSection
      decorationText={decorationText}
      sectionTitle={sectionTitle}
      description={description}
      services={services}
    />
  );
};

export default ExampleServiceSection;
