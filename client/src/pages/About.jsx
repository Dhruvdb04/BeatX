import React from 'react';
import Navbar from '../components/common/Navbar';

const About = () => {
  return (
    <div className="font-sans text-gray-900">
        <Navbar/>

      {/* About Intro Section */}
      <section className="py-12 px-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white">
        <h2 className="text-4xl font-extrabold mb-4">About Us</h2>
        <p className="text-lg leading-relaxed">
          Welcome to our platform! We are dedicated to providing the best evaluation and learning experience.
        </p>
        <p className='text-lg leading-relaxed'>
            A digital tool designed to help organizations and teachers efficiently evaluate papers. Provides automated and customizable solutions to speed up the grading process.
        </p>
        {/* <img src="" alt="About Us" className="w-full h-auto rounded-lg shadow-2xl" /> */}
      </section>

      {/* Our Mission Section */}
      <section className="py-12 px-6 bg-yellow-100">
        <h2 className="text-4xl font-extrabold mb-4 text-yellow-800">Our Mission</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Our mission is to revolutionize the way education is evaluated and delivered through innovative solutions. We strive to provide cutting-edge tools and resources to empower educators and students alike.
        </p>
      </section>

      {/* Our Vision Section */}
      <section className="py-12 px-6 bg-green-100">
        <h2 className="text-4xl font-extrabold mb-4 text-green-800">Our Vision</h2>
        <p className="text-lg leading-relaxed text-gray-700">Automated grading with customizable rubrics.</p>
        <p className="text-lg leading-relaxed text-gray-700">AI-powered error detection and correction suggestions.</p>
        <p className="text-lg leading-relaxed text-gray-700">Streamlined workflow for managing multiple papers and assignments.</p>
        <p className="text-lg leading-relaxed text-gray-700">Dashboard for tracking progress and performance analytics.</p>
      </section>

      {/* Meet the Team Section */}
      <section className="py-12 px-6 bg-gray-200">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-800">Meet the Team</h2>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-lg w-full sm:w-1/3 border border-blue-300">
            {/* <img src="" alt="Team Member" className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-500" /> */}
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Trishant Jain</h3>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-lg w-full sm:w-1/3 border border-indigo-300">
            {/* <img src="" alt="Team Member" className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-indigo-500" /> */}
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Lokesh singh</h3>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-lg w-full sm:w-1/3 border border-purple-300">
            {/* <img src="" alt="Team Member" className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-purple-500" /> */}
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Riya Sisodia</h3>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-lg w-full sm:w-1/3 border border-purple-300">
            {/* <img src="" alt="Team Member" className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-purple-500" /> */}
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Dhruv Bhardwaj</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
