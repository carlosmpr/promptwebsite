import React from "react";

type TrustedSectionProps = {
  imagePaths: string[]; // Array of image paths for company logos
};

const TrustedSection: React.FC<TrustedSectionProps> = ({ imagePaths }) => {
  return (
    <section className="py-12 px-4">
      <div className="flex flex-row flex-wrap justify-center items-center gap-8">
        {imagePaths.map((imagePath, index) => (
          <img key={index} src={imagePath} alt={`Company ${index + 1} Logo`} className="h-8 md:h-10" />
        ))}
      </div>
    </section>
  );
};

// Render example
const ExampleTrustedSection = () => {
  const imagePaths = [
    "company1.svg",
    "company2.svg",
    "company3.svg",
    "company4.svg",
    "company5.svg",
    "company6.svg",
  ];

  return (
    <TrustedSection imagePaths={imagePaths} />
  );
};

export default ExampleTrustedSection;
