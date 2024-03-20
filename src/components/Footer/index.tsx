import React, { useState } from "react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement subscription logic here
    console.log("Subscribed with email:", email);
    // Reset email input after subscribe
    setEmail("");
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-4">
          <h3 className="text-xl mb-2">Subscribe to our Newsletter</h3>
          <form onSubmit={handleSubscribe} className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-2 flex-grow"
              required
            />
            <button type="submit" className="bg-violet-500 hover:bg-violet-600 p-2">Subscribe</button>
          </form>
        </div>
        <nav className="mb-4">
          <ul className="flex flex-wrap justify-center gap-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
        <div className="text-center">
          <p>&copy; {currentYear} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
