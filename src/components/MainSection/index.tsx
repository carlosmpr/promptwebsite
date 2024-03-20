import React from "react";

type MainSectionProps = {
  description: string;
  onDemoClick: () => void;
  onSignUpClick: () => void;
  imageUrl: string;
  children: React.ReactNode; // Use children for custom title content, including line breaks
};

const MainSection: React.FC<MainSectionProps> = ({
  children, // Children prop for custom title
  description,
  onDemoClick,
  onSignUpClick,
  imageUrl,
}) => {
  return (
    <section className="text-center py-20 px-4">
      <h1 className="text-4xl sm:text-7xl font-bold">{children}</h1> {/* Children used here */}
      <p className="mt-4 mb-8">{description}</p>
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={onDemoClick}
          className="py-2 px-6 border border-gray-300 text-gray-800 rounded-md hover:bg-gray-100 transition duration-300"
        >
          Demo
        </button>
        <button
          onClick={onSignUpClick}
          className="py-2 px-6 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition duration-300"
        >
          Sign Up
        </button>
      </div>
      <img src={imageUrl} alt="Main Section Image" className="mx-auto" />
    </section>
  );
};

// Render example
const ExampleMainSection = () => {
  const description = "This is where your amazing journey begins. Explore our features and services.";
  
  const handleDemoClick = () => {
    console.log("Demo clicked");
  };
  
  const handleSignUpClick = () => {
    console.log("Sign Up clicked");
  };
  
  const imageUrl = "banner.png"; // Replace this path with your image path

  return (
    <MainSection
      description={description}
      onDemoClick={handleDemoClick}
      onSignUpClick={handleSignUpClick}
      imageUrl={imageUrl}
    >
      {/* Custom title with line break */}
      Name my awesome<br /> great site
    </MainSection>
  );
};

export default ExampleMainSection;
