import React from "react";
import { Link,NavLink} from "react-router-dom";
function Footer(){
    return (
    <>
      <footer className="bg-blue-600 dark:bg-gray-500/80 dark:border-gray-900 text-white py-10">
  <div className="max-w-7xl mx-auto px-4 text-center">
    {/* Logo or App Name */}
    <div className="mb-6">
      <h2 className="text-2xl font-bold">DoGo</h2>
      <p className="text-blue-100 dark:text-gray-400 max-w-md mx-auto mt-2">
        Making your business smoother and smarter.
      </p>
    </div>

    {/* Navigation Items */}
    <div className="mb-6 flex flex-wrap justify-center gap-6 text-sm text-blue-100 dark:text-gray-400">
      <button className="hover:text-white dark:hover:text-gray-200">Home</button>
      <button className="hover:text-white dark:hover:text-gray-200">Features</button>
      <button className="hover:text-white dark:hover:text-gray-200">Pricing</button>
      <button className="hover:text-white dark:hover:text-gray-200">Contact</button>
      <button className="hover:text-white dark:hover:text-gray-200">Help</button>
    </div>

    {/* Optional: Footer Bottom Text */}
    <p className="text-sm text-blue-200 dark:text-gray-500">
      &copy; 2025 YourAppName. All rights reserved.
    </p>
  </div>
</footer>



    </>
  );
};

export default Footer;
