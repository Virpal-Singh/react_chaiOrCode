import React from "react";
import { Link,NavLink} from "react-router-dom";
function Footer(){
    return (
    <>
      <footer className="bg-blue-600 text-white py-10">
  <div className="max-w-7xl mx-auto px-4 text-center">
    {/* Logo or App Name */}
    <div className="mb-6">
      <h2 className="text-2xl font-bold">DoGo</h2>
      <p className="text-blue-100 max-w-md mx-auto mt-2">
        Making your business smoother and smarter.
      </p>
    </div>

    {/* Navigation Items */}
    <div className="mb-6 flex flex-wrap justify-center gap-6 text-sm text-blue-100">
      <button className="hover:text-white">Home</button>
      <button className="hover:text-white">Features</button>
      <button className="hover:text-white">Pricing</button>
      <button className="hover:text-white">Contact</button>
      <button className="hover:text-white">Help</button>
    </div>

    {/* Optional: Footer Bottom Text */}
    <p className="text-sm text-blue-200">
      &copy; 2025 YourAppName. All rights reserved.
    </p>
  </div>
</footer>


    </>
  );
};

export default Footer;
