import React, { useState } from "react";

type Testimonial = {
  quote: string;
  avatar: string; // URL to the avatar image
  name: string;
  position: string;
};

type TestimonialSectionProps = {
  testimonials: Testimonial[];
};

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const changeTestimonial = (index: number, direction: "left" | "right") => {
    setDirection(direction);
    setCurrentIndex(index);
  };

  const { quote, avatar, name, position } = testimonials[currentIndex];

  return (
    <section className="py-12 px-4 text-center relative">
      <div className="max-w-2xl mx-auto transition-opacity duration-500" style={{ opacity: direction === "right" ? 1 : 0 }}>
        <p className="text-4xl font-medium italic">"{quote}"</p>
        <img src={avatar} alt={name} className="w-24 h-24 rounded-full mx-auto mt-6" />
        <h3 className="text-xl font-semibold mt-4">{name}</h3>
        <p className="text-md">{position}</p>
      </div>
      <button onClick={() => changeTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length, "left")} className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <button onClick={() => changeTestimonial((currentIndex + 1) % testimonials.length, "right")} className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    </section>
  );
};

// Render example
const ExampleTestimonialSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "This service has transformed our business. Highly recommend!",
      avatar: "path/to/avatar1.jpg",
      name: "John Doe",
      position: "CEO of Company A",
    },
    {
      quote: "A truly outstanding experience from start to finish.",
      avatar: "path/to/avatar2.jpg",
      name: "Jane Smith",
      position: "CTO of Company B",
    },
    // Add more testimonials as needed
  ];

  return <TestimonialSection testimonials={testimonials} />;
};

export default ExampleTestimonialSection;
