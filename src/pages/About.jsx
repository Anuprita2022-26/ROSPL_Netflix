import React from "react";

function About() {
  return (
    <div className="text-center py-20 px-6">
      <h2 className="text-4xl font-bold text-red-600 mb-6">About Us</h2>
      <p className="text-gray-300 max-w-2xl mx-auto text-lg">
        This Netflix Clone is a simple demo project built using React and Tailwind CSS. 
        It demonstrates routing, reusable components, and a clean UI layout. 
        You can expand it further by integrating TMDB API for real movie data.
      </p>
    </div>
  );
}

export default About;